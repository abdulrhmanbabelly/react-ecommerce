import { Route, BrowserRouter, Routes } from 'react-router-dom'
import React from 'react';
const NavigationBar = React.lazy(() => import('./Components/common/navbar'));
const Home = React.lazy(() => import('./Pages/home'));
const AdminDashboard = React.lazy(() => import('./Pages/adminDashboard'));
const Carts = React.lazy(() => import('./Pages/carts'));
const Store = React.lazy(() => import('./Pages/store'));
const SingleProduct = React.lazy(() => import('./Pages/singleProduct'));
const SignIn = React.lazy(() => import('./Pages/signIn'));
const SignUp = React.lazy(() => import('./Pages/signUp'));
const Settings = React.lazy(() => import('./Pages/settings'));
import { CircularProgress, Grid } from '@mui/material';

let App = (props) => {

    return (
    <BrowserRouter>
        <React.Suspense fallback={<CircularProgress style={{ position : 'absolute', top : "50%", left :"50%", transform : "translate(-50%,-50%)"}}/>}>
            <NavigationBar mode={props.mode} />
            <Grid container className="routes">
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/adminDashboard/*' element={<AdminDashboard mode={props.mode}/>} />
                    <Route path='/carts' element={<Carts />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/products/:id' element={<SingleProduct />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/signIn' element={<SignIn />} />
                    <Route path='/signUp' element={<SignUp />} />
                </Routes>
            </Grid>
        </React.Suspense>
    </BrowserRouter>
    )
}

export default App;