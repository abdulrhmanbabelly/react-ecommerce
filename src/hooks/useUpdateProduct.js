import { gql, useMutation } from "@apollo/client";
import { UPDATE_PRODUCT } from "../gql";

let useUpdateProduct = () => {
  let [updateProduct] = useMutation(UPDATE_PRODUCT)

  return { updateProduct };
};

export default useUpdateProduct;
