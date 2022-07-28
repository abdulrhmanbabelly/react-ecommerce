import { Route, BrowserRouter, Routes } from 'react-router-dom'
import React from 'react';
import NavigationBar from './Components/common/navbar';
import { 
    Home,
    AdminDashboard,
    Carts,
    Store,
    SingleProduct,
    SignIn,
    SignUp,
    Settings 
} from './Pages';
import { Grid } from '@mui/material';


let App = (props) => {

    return (
    <BrowserRouter>
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
    </BrowserRouter>
    )
}

export default App;