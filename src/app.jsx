import { Route, Routes, useLocation } from 'react-router-dom'
import React from 'react';
import { Grid } from '@mui/material';
import { Loading } from './Components';
const AdminNavigationBar = React.lazy(() => import('./Components/Admin/adminNavigationBar'));
const NavigationBar = React.lazy(() => import('./Components/common/navbar'));
const Home = React.lazy(() => import('./Pages/home'));
const Carts = React.lazy(() => import('./Pages/carts'));
const Store = React.lazy(() => import('./Pages/store'));
const SingleProduct = React.lazy(() => import('./Pages/singleProduct'));
const SignIn = React.lazy(() => import('./Pages/signIn'));
const SignUp = React.lazy(() => import('./Pages/signUp'));
const EditAccount = React.lazy(() => import('./Pages/editAccount'));
const AdminCartsTable = React.lazy(() => import('./Pages/admin/adminCartsTable'));
const AdminUsersTable = React.lazy(() => import('./Pages/admin/adminUsersTable'));
const AdminCategoriesTable = React.lazy(() => import('./Pages/admin/adminCategoriesTable'));
const AdminProductsTable = React.lazy(() => import('./Pages/admin/adminProductsTable'));

let App = (props) => {

    let location = useLocation();

    return (
    <React.Suspense fallback={<Loading />}>
        {location.pathname.indexOf('adminDashboard') === -1 && <NavigationBar mode={props.mode} />}
        <Grid container className="routes">
            <Routes>
                <Route path='/' element={<Home/>} />
                {location.pathname.indexOf('adminDashboard') > -1 && (
                <Route path='/adminDashboard/*' element={<AdminNavigationBar mode={props.mode} routes={
                    <Routes>
                        <Route path='/products' exact element={<AdminProductsTable/>} />
                        <Route path='/users' exact element={<AdminUsersTable/>} />
                        <Route path='/categories' exact element={<AdminCategoriesTable/>} />
                        <Route path='/carts' exact element={<AdminCartsTable />} />
                    </Routes>
                }/>}/>
                    
                )}
                <Route path='/carts' element={<Carts />} />
                <Route path='/store' element={<Store />} />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route path='/editAccount' element={<EditAccount />} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/signUp' element={<SignUp />} />
            </Routes>
        </Grid>
    </React.Suspense>
    )
}

export default App;