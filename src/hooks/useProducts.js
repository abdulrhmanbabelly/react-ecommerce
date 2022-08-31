import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../gql/products";
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from "../store/features/products/productsSlice";
import { useEffect } from "react";
let useAdminProducts = () => {
  let { loading, error, data } = useQuery(GET_PRODUCTS);

  let products = useSelector(state => state.products.products);
  let dispatch = useDispatch();
  useEffect(() => {
    if (!loading && !error && !products[0]) {
      dispatch(setProducts({ products : data.products }))
    }
  })

  return { products, loading, error };
};

export default useAdminProducts;
