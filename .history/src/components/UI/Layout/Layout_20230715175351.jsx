import st from './Layout.module.css'
import { Outlet, NavLink } from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from '../../../context';

export const Layout = () => {
    const { setIsAuth } = useContext(AuthContext)
    return (
        <div className={st.wrapper}>
            <header className={st.navbar}>
                <NavLink className={st.navbar__link} to='about'>О нас</NavLink>
                <NavLink className={st.navbar__link} to="/">Posts</NavLink>
                <button className={st.navbar__link} onClick={() => {
                    setIsAuth(false)
                    localStorage.removeItem('auth');
                }}>Exit</button>
            </header>
            <main className={st.main}>
                <Outlet />
            </main>
            <footer className={st.footer}>
                2023
            </footer>
        </div>
    )
}
