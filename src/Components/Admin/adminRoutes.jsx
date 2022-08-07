import React from 'react';
import { Route, Routes } from 'react-router-dom';
const AdminCartsTable = React.lazy(() => import('./Tables/adminCartsTable'));
const AdminUsersTable = React.lazy(() => import('./Tables/adminUsersTable'));
const AdminCategoriesTable = React.lazy(() => import('./Tables/adminCategoriesTable'));
const AdminProductsTable = React.lazy(() => import('./Tables/adminProductsTable'));

let AdminRoutes = () => {
    
    return (
    <Routes>
        <Route path='/products' exact element={<AdminProductsTable/>} />
        <Route path='/users' exact element={<AdminUsersTable/>} />
        <Route path='/categories' exact element={<AdminCategoriesTable/>} />
        <Route path='/carts' exact element={<AdminCartsTable />} />
    </Routes>
    )
}

export default AdminRoutes;