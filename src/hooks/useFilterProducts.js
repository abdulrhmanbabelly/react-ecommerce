import { gql, useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
let useFilterProducts = (setProducts) => {
  let dispatch = useDispatch();
  let [getProducts] = useLazyQuery(gql`
    query getProducts($path: String) {
      sortedProducts(path: $path)
        @rest(type: "product", path: "products{args.path}") {
        image
        description
        title
        category
        price
        rating {
          rate
          count
        }
        id
      }
    }
  `);
  let filterProducts = (filters) => {
    let { category, desc } = filters;
    getProducts({
      variables: {
        path: `${category === "all" ? "" : `/category/${category}`}/${
          desc ? "?sort=desc" : "?sort=asc"
        }`,
      },
    }).then((data) => {
      if (data?.data.sortedProducts) {
        let { searchBy, limit, search, priceValue, rateValue, countValue } =
          filters;

        let { sortedProducts } = data.data;
        let products = sortedProducts;
        let filterdproducts = [];

        for (let i = 0; i < products.length; i++) {
          if (
            priceValue[0] <= products[i].price &&
            priceValue[1] >= products[i].price &&
            rateValue[0] <= products[i].rating.rate &&
            rateValue[1] >= products[i].rating.rate &&
            countValue[0] <= products[i].rating.count &&
            countValue[1] >= products[i].rating.count
          )
            filterdproducts.push(products[i]);
        }

        let searchedproducts = [];

        if (search)
          for (let i = 0; i < filterdproducts.length; i++) {
            if (searchBy !== "id" && searchBy !== "price") {
              if (filterdproducts[i][searchBy].toString().indexOf(search) > -1)
                searchedproducts.push(filterdproducts[i]);
            } else {
              if (filterdproducts[i][searchBy] === Number(search))
                searchedproducts.push(filterdproducts[i]);
            }
          }

        let returnableProducts = [];

        if (search) {
          for (
            let i = 0;
            i <
            (limit > searchedproducts.length ? searchedproducts.length : limit);
            i++
          ) {
            returnableProducts[i] = searchedproducts[i];
          }

          dispatch(setProducts({ products: returnableProducts }));

          return;
        }

        for (
          let i = 0;
          i < (limit > filterdproducts.length ? filterdproducts.length : limit);
          i++
        ) {
          returnableProducts[i] = filterdproducts[i];
        }

        dispatch(setProducts({ products: returnableProducts }));
      }
    });
  };

  return { filterProducts };
};

export default useFilterProducts;
