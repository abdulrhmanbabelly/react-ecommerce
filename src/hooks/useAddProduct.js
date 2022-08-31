import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../gql";

let useAddProduct = () => {
  let [addProduct] = useMutation(ADD_PRODUCT);
  return { addProduct };
};

export default useAddProduct;
