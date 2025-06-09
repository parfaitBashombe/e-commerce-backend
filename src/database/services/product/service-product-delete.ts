import BaseService from "@src/database/system/base-service";

class DeleteProductService extends BaseService {
  protected async transaction(id: string): Promise<null | any> {
    const result = await this.database.product.delete({
      where: { product_id: id },
    });

    if (!result) return null;
    return result;
  }
}

export default DeleteProductService;
