import BaseService from "@src/database/system/base-service";
import { Cart, CartItem, Product } from "@src/generated/prisma";
import { CartData } from "@src/types/cart-item";
import Services from "..";

class AddCartItemService extends BaseService {
  protected async transaction(data: CartData): Promise<null | CartItem> {
    // const product = await this.database.product.create({
    //   data: {
    //     ...data,
    //   },
    // });

    const cartItem: CartItem = await this.database.cartItem.create({
      data: {
        cart_id: cart.cart_id,
        product_id: data.product_id,
        quantity: data.quantity,
      },
    });

    return cartItem;
  }
}

export default AddCartItemService;

class AddProductToCartService extends BaseService {
  /**
   * Adds or updates a product in the user's cart.
   * @param userId The ID of the user.
   * @param productId The ID of the product to add.
   * @param quantity The quantity of the product to add. Defaults to 1.
   * @returns The updated or newly created cart item.
   */
  protected async transaction(
    userId: string,
    productId: string,
    quantity: number = 1
  ): Promise<CartItem> {
    // 1. Find the user's cart. Since it's a one-to-one relationship (if it exists).
    let cart = await this.database.cart.findUnique({
      where: { user_id: userId },
      include: {
        CartItems: {
          where: { product_id: productId }, // Check if this product already exists in cart items
        },
      },
    });

    let cartItem: CartItem;

    // If cart doesn't exist for the user, create one
    if (!cart) {
      console.log(`No cart found for user ${userId}. Creating a new cart.`);
      cart = await this.database.cart.create({
        data: {
          user_id: userId,
        },
      });

      // Then, create the first cart item for this new cart
      cartItem = await this.database.cartItem.create({
        data: {
          cart_id: cart.cart_id,
          product_id: productId,
          quantity: quantity,
        },
      });
      console.log(`New cart created and product ${productId} added to it.`);
    } else {
      // Cart exists, now check if the product is already in this cart
      const existingCartItem = cart.CartItems[0]; // Prisma's include filter gives an array

      if (existingCartItem) {
        // Product already in cart, update its quantity
        console.log(
          `Product ${productId} already in cart ${cart.cart_id}. Updating quantity.`
        );
        cartItem = await this.database.cartItem.update({
          where: { cart_item_id: existingCartItem.cart_item_id },
          data: { quantity: existingCartItem.quantity + quantity },
        });
      } else {
        // Product not in cart, add it as a new item
        console.log(
          `Product ${productId} not in cart ${cart.cart_id}. Adding as new item.`
        );
        cartItem = await this.database.cartItem.create({
          data: {
            cart_id: cart.cart_id,
            product_id: productId,
            quantity: quantity,
          },
        });
      }
    }
    return cartItem;
  }
}
