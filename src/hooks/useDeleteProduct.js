import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "../gql";

let useDeleteProduct = () => {
  let [deleteProduct] = useMutation(DELETE_PRODUCT);
  return { deleteProduct };
};

export default useDeleteProduct;
