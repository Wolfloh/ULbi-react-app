import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { About } from '../pages/About'
import { Error } from '../pages/Error'
import { Login } from '../pages/Login'
import { PostPage } from '../pages/PostPage'
import { Posts } from '../pages/Posts'
import { Shop } from '../pages/Shop'
import { Layout } from './UI/Layout/Layout'
import { Loader } from './UI/Loader/Loader'
import { userStore } from '../stores/UserStore'
import { observer } from 'mobx-react-lite'
import { ProductPage } from '../pages/ProductPage/ProductPage'
import { Basket } from '../pages/Basket/Basket'


export const AppRouters = observer(() => {
    const { isAuth, isLoading } = userStore;
    const location = useLocation()
    if (isLoading) {
        return <Loader />
    }
    return (
        <Routes>
            {isAuth
                ?

                <Route path="/" element={<Layout />}>
                    <Route index element={<Posts />} />
                    <Route path='/:id' element={<PostPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="basket" element={<Basket />} />
                    <Route path="shop/:product" element={<ProductPage />} />
                    <Route path="*" element={<Error />} />
                </Route>

                :

                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="basket" element={<Basket />} />
                    <Route path="shop/:product" element={<ProductPage />} />
                    <Route path="*" element={
                        <Navigate to='login' state={{ from: location.pathname }} />
                    } />
                    <Route index element={
                        <Navigate to='login' state={{ from: location.pathname }} />
                    } />
                </Route>

            }
        </Routes>
    )
})
