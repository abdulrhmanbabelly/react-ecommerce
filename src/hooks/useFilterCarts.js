import { setCarts } from "../store/features/admin/cartsSlice";
import { useDispatch } from "react-redux";
import { gql, useLazyQuery } from "@apollo/client";
let useFilterCarts = () => {
  let dispatch = useDispatch();
  let [getCarts] = useLazyQuery(gql`
    query getCarts($path: String) {
      sortedCarts(path: $path) @rest(type: "cart", path: "carts{args.path}") {
        products
        date
        id
        userId
      }
    }
  `);
  let filterCarts = (filters) => {
    let { desc, startDate, endDate, limit } = filters;
    getCarts({
      variables: {
        path: `/?${desc ? "sort=desc" : "sort=asc"}${
          startDate &&
          endDate &&
          `&startdate=${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}&enddate=${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
        }&limit=${limit}`,
      },
    }).then((data) => {
      let carts = data.data.sortedCarts;
      let { search, searchBy } = filters;
      let searchedCarts = [];

      if (search)
        for (let i = 0; i < carts.length; i++) {
          if (
            searchBy !== "productId" &&
            searchBy !== "quantity" &&
            search !== "id"
          ) {
            if (carts[i][searchBy].toString().indexOf(search) > -1)
              searchedCarts.push(carts[i]);
          } else {
            for (let j = 0; j < carts[i].products.length; j++) {
              if (search === carts[i].products[j][searchBy].toString())
                searchedCarts.push(carts[i]);
            }
          }
        }

      dispatch(setCarts({ carts: searchedCarts[0] ? searchedCarts : carts }));
    });
  };

  return { filterCarts };
};

export default useFilterCarts;
