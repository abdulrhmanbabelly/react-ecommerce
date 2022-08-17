import { useQuery } from '@apollo/client';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LOGGED_IN } from '../gql';
import { Store, SingleProduct, SignUp, SignIn, NotFound, Home, EditAccount, Carts } from '../Pages';

let ClientRouter = () => {

    let loggedIn = useQuery(LOGGED_IN).data.loggedIn;

    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/carts' element={loggedIn ? <Carts /> : <SignIn />} />
            <Route path='/store' element={<Store />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/editAccount' element={loggedIn ? <EditAccount /> : <SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default ClientRouter;