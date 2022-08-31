import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Store, SingleProduct, SignUp, SignIn, NotFound, Home, EditAccount, Carts } from '../Pages';

let ClientRouter = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    console.log(isLoggedIn)
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/carts' element={isLoggedIn ? <Carts /> : <SignIn />} />
            <Route exact path='/products'>
                <Route index element={<Store />}/>
                <Route exact path='/products/:id' element={<SingleProduct />} />
            </Route>
            <Route path='/editAccount' element={isLoggedIn ? <EditAccount /> : <SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default ClientRouter;