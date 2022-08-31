import { useMutation } from "@apollo/client";
import { DELETE_CART } from "../gql";

let useDeleteCart = () => {
  let [deleteCart] = useMutation(DELETE_CART);
  return { deleteCart };
};

export default useDeleteCart;
