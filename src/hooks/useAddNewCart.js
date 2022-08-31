import { gql, useMutation } from "@apollo/client";
import { ADD_NEW_CART } from "../gql";

let useAddNewCart = () => {
  let [addNewCart] = useMutation(ADD_NEW_CART);

  return { addNewCart };
};

export default useAddNewCart;
