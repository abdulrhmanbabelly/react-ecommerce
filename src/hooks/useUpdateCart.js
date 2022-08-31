import { gql, useMutation } from "@apollo/client";
import { UPDATE_CART } from "../gql";

let useUpdateCart = () => {
  let [updateCart] = useMutation(UPDATE_CART);
  return { updateCart };
};

export default useUpdateCart;
