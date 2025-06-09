import CreateProductValidator from "@src/app/validators/product/validator-product-create";
import UpdateProductValidator from "@src/app/validators/product/validator-product-update";

const CreateProduct = new CreateProductValidator();
const UpdateProduct = new UpdateProductValidator();

const ProductValidators = { CreateProduct, UpdateProduct };

export default ProductValidators;
