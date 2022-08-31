import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CARTS } from "../gql";
import { setCarts } from "../store/features/admin/cartsSlice";

let useCarts = () => {
  let { loading, error, data } = useQuery(GET_CARTS);

  let carts = useSelector((state) => state.adminCarts.carts);
  let dispatch = useDispatch();
  useEffect(() => {
    if (!loading && !error && !carts[0]) {
      dispatch(setCarts({ carts: data.carts }));
    }
  });

  return { loading, error, carts };
};

export default useCarts;
