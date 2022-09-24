import React from "react";
import { AddProduct, UpdateProduct } from "../../components";
import { useAdminProducts, useCategories } from "../../hooks";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDeleteProduct } from "../../hooks";
import { useDispatch } from "react-redux";
import { deleteStorageProduct } from "../../store/features/admin/productsSlice";
import swal from "sweetalert";
import { Rating } from "@mui/material";
import { blue, green } from "@mui/material/colors";

let AdminProductsTable = () => {
  let { loading, error, products } = useAdminProducts();
  let { categories } = useCategories();
  let { deleteProduct } = useDeleteProduct();
  let dispatch = useDispatch();

  let handleDeleteProduct = (id, order, title) => {
    deleteProduct({
      variables: {
        id: id,
      },
    })
      .then((data) => {
        if (!data.errors) {
          dispatch(deleteStorageProduct({ order: order }));
          swal({ title: `deleted product ${title}`, icon: "success" });
        } else
          swal({ title: `failed to delete product ${title}`, icon: "error" });
      })
      .catch((err) => {
        swal({ title: `failed to delete product ${title}`, icon: "error" });
      });
    console.log(products);
  };
  if (loading) return <CircularProgress />;
  if (error) return <h2>error</h2>;

  return (
    <>
      <AddProduct categories={categories} />
      <Box sx={{ height: 600, width: "100%", marginTop: "1vw" }}>
        <DataGrid
          rows={products.map((product, i) => ({
            id: product.id,
            category: product.category,
            title: product.title,
            count: product.rating.count,
            rate: product.rating.rate,
            price: product.price,
            update: { order: i, product: product },
          }))}
          columns={[
            {
              field: "id",
              headerName: "id",
              width: 100,
            },
            {
              field: "category",
              headerName: "category",
              type: "string",
              sortable: false,
              width: 140,
            },
            {
              field: "title",
              headerName: "title",
              type: "string",
              sortable: false,
              width: 500,
            },
            {
              field: "count",
              headerName: "count",
              renderCell: ({ value }) => (
                <Box sx={{ color: blue["700"] }}>${value}</Box>
              ),
              type: "number",
              width: 100,
            },
            {
              field: "rate",
              headerName: "rate",
              renderCell: ({ value }) => <Rating readOnly value={value} />,
              type: "number",
              width: 150,
            },
            {
              field: "price",
              headerName: "price",
              renderCell: ({ value }) => (
                <Box sx={{ color: green["700"] }}>${value}</Box>
              ),
              type: "number",
              width: 100,
            },
            {
              field: "update",
              headerName: "update",
              renderCell: ({ value }) => {
                return (
                  <>
                    <Box mr={2}>
                      <Button
                        color="error"
                        onClick={() =>
                          handleDeleteProduct(
                            value.product.id,
                            value.order,
                            value.product.title
                          )
                        }
                      >
                        delete
                      </Button>
                    </Box>
                    <UpdateProduct
                      product={value.product}
                      categories={categories}
                      order={value.order}
                    />
                  </>
                );
              },
              sortable: false,
              width: 190,
            },
          ]}
          pageSize={10}
          sx={{ width: "100%", overflowX: "auto" }}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          components={{
            Toolbar: GridToolbar,
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default AdminProductsTable;
