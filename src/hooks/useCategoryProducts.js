import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_PRODUCTS } from "../gql/catagories";

let useCategoryProducts = (category) => {
  let [categoryProducts, setCategoryProducts] = useState([]);

  let { loading, error, data } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: { category },
  });

  if (!loading && !error && !categoryProducts[0])
    setCategoryProducts(data.categoriesProducts);

  return { loading, error, categoryProducts };
};

export default useCategoryProducts;
