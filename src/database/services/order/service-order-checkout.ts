import BaseService from "@src/database/system/base-service";
import { Order } from "@src/generated/prisma";

class CheckoutOrderService extends BaseService {
  protected async transaction(userId: string): Promise<Order> {
    // 1. Fetch the cart with items and their products
    const cart = await this.database.cart.findUnique({
      where: { user_id: userId },
      include: {
        CartItem: {
          include: {
            Product: true,
          },
        },
      },
    });

    if (!cart || cart.CartItem.length === 0) {
      throw new Error("Cart is empty");
    }

    // 2. Validate stock
    for (const item of cart.CartItem) {
      if (item.Product.stock < item.quantity) {
        throw new Error(
          `Insufficient stock for product: ${item.Product.title}. Available: ${item.Product.stock}, Requested: ${item.quantity}`
        );
      }
    }

    // 3. Calculate total amount
    const totalAmount = cart.CartItem.reduce((sum, item) => {
      return sum + item.Product.price * item.quantity;
    }, 0);

    // 4. Execute transaction
    const order = await this.database.$transaction(async (prisma) => {
      // a. Create Order
      const newOrder = await prisma.order.create({
        data: {
          user_id: userId,
          total_amount: totalAmount,
          status: "PENDING",
        },
      });

      // b. Create Order Items & c. Decrement Stock
      for (const item of cart.CartItem) {
        await prisma.orderItem.create({
          data: {
            order_id: newOrder.order_id,
            product_id: item.product_id,
            vendor_id: item.Product.vendor_id,
            quantity: item.quantity,
            price_at_purchase: item.Product.price,
            status: "PENDING",
          },
        });

        await prisma.product.update({
          where: { product_id: item.product_id },
          data: {
            stock: {
              decrement: item.quantity,
            },
          },
        });
      }

      // d. Empty the cart items
      await prisma.cartItem.deleteMany({
        where: { cart_id: cart.cart_id },
      });

      return newOrder;
    });

    return order;
  }
}

export default CheckoutOrderService;
