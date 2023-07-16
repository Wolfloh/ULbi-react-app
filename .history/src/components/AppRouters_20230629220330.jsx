import React from 'react'
import { useContext } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AuthContext } from '../context'
import { About } from '../pages/About'
import { Error } from '../pages/Error'
import { Login } from '../pages/Login'
import { PostPage } from '../pages/PostPage'
import { Posts } from '../pages/Posts'
import { Layout } from './UI/Layout/Layout'
import { Loader } from './UI/Loader/Loader'

export const AppRouters = () => {
    const { isAuth, isLoading } = useContext(AuthContext)
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
                    <Route path="*" element={<Error />} />
                </Route>

                :

                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<Login />} />
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
}
