import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../gql/catagories";

let useCategories = () => {
  let { loading, error, data } = useQuery(GET_CATEGORIES);
  let [categories, setCategories] = useState([]);

  if (!loading && !error && !categories[0]) {
    setCategories(data.categories);
  }

  return { loading, error, categories };
};

export default useCategories;
