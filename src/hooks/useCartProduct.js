import { GET_CART_PRODUCT } from "../gql/products";
import { useQuery } from "@apollo/client";

let useCartProduct = (id) => {
  let { loading, error, data } = useQuery(GET_CART_PRODUCT, {
    variables: {
      id: id,
    },
  });

  let product = {
    title: "...",
    price: 0,
  };

  if (!loading && !error) {
    product = data.product;
  }

  return { product, loading, error };
};

export default useCartProduct;
