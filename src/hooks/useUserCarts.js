import { useQuery } from "@apollo/client";
import { GET_USER_CART } from "../gql";
import { useSelector, useDispatch } from 'react-redux';
import { init } from "../store/features/carts/cartsSilce";
import { useEffect } from "react";
let useUserCarts = (userId) => {
  let { loading, error, data } = useQuery(GET_USER_CART, {
    variables: {
      userId,
    },
  });

  let carts = useSelector((state) => state.carts.carts);
  let prices = useSelector((state) => state.carts.prices);
  let dispatch = useDispatch();
  useEffect(() => {
    if (!carts[0] && !loading && !error)
    dispatch(init({ carts: data.carts, prices: data.carts.map((cart) => 0) }));
  })

  return { carts, prices, loading, error };
};

export default useUserCarts;
