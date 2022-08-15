import { Route, Routes, useLocation } from 'react-router-dom'
import React from 'react';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { Loading } from './Components';
import { useQuery } from '@apollo/client';
import { DARK_MODE, LOGGED_IN } from './gql';
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

let App = () => {

    let location = useLocation();
    let darkMode = useQuery(DARK_MODE);
    let loggedIn = useQuery(LOGGED_IN).data.loggedIn === "true";
    let darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    })

    let lightTheme = createTheme({
        palette: {
            mode: 'light',
        }
    })
    
    return (
    <React.Suspense fallback={<Loading width={100} height={100}/>}>
        <ThemeProvider theme={darkMode.data?.on === "true" ? darkTheme : lightTheme}>
        <CssBaseline />
        {location.pathname.indexOf('adminDashboard') === -1 && <NavigationBar />}
        <>
            <Grid container style={{ width : "auto" }}>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    {location.pathname.indexOf('adminDashboard') > -1 && (
                    <Route path='/adminDashboard/*' element={<AdminNavigationBar routes={
                        <Routes>
                            <Route path='/products' exact element={<AdminProductsTable/>} />
                            <Route path='/users' exact element={<AdminUsersTable/>} />
                            <Route path='/categories' exact element={<AdminCategoriesTable/>} />
                            <Route path='/carts' exact element={<AdminCartsTable />} />
                        </Routes>
                    }/>}/>
                        
                    )}
                    <Route path='/carts' element={loggedIn ? <Carts /> : <SignIn />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/products/:id' element={<SingleProduct />} />
                    <Route path='/editAccount' element={loggedIn ? <EditAccount /> : <SignIn />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/signIn' element={<SignIn />} />
                </Routes>
            </Grid> 
        </>
        </ThemeProvider>
    </React.Suspense>
    )
}

export default App;