import st from './Layout.module.scss'
import { Outlet, NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import basketImg from './basket.png';
import { userStore } from '../../../stores/UserStore';
import { observer } from "mobx-react-lite";
import { basket } from '../../../stores/BasketStore';

export const Layout = observer(() => {
    const { isAuth, setIsAuth } = userStore;
    const { basketList } = basket;
    const [burgerClass, setBurgerClass] = useState(`${st.navbar}`);


    return (
        <div onClick={(e) => {
            if (!e.target.closest(`.${st.navbar__aside}`)
                &&
                !e.target.closest(`.${st.navbar__burger_body}`)) {
                setBurgerClass(`${st.navbar}`)
            }
        }} className={st.wrapper}>
            <header className={burgerClass}>
                <button onClick={() => setBurgerClass(`${st.navbar} ${st.active}`)} className={st.navbar__burger_body}>
                    <span className={st.navbar__burger_line}></span>
                    <span className={st.navbar__burger_line}></span>
                    <span className={st.navbar__burger_line}></span>
                </button>
                <aside className={st.navbar__aside}>
                    <button onClick={() => setBurgerClass(`${st.navbar}`)} className={`${st.navbar__burger_body} ${st.visible}`}>
                        <span className={st.navbar__burger_line}></span>
                        <span className={st.navbar__burger_line}></span>
                    </button>
                    <NavLink className='navbar-link' to='about'>О НАС</NavLink>
                    <NavLink className='navbar-link' to="/">ПОСТЫ</NavLink>
                    <NavLink className='navbar-link' to="shop">МАГАЗИН</NavLink>
                    <NavLink className='navbar-link navbar-link-basket' to="basket">
                        {basketList.length
                            ?
                            <span className='basket-number'>{basketList.length}</span>
                            :
                            void 0
                        }
                        <img className={st.basket_img} src={basketImg} alt="basket-img" />
                        <span>
                            КОРЗИНА
                        </span>
                    </NavLink>
                </aside>
                {isAuth
                    ?
                    <button className='navbar-link' onClick={() => {
                        setIsAuth(false)
                        localStorage.removeItem('auth');
                    }}>
                        ВЫХОД
                    </button>
                    :
                    <NavLink className='navbar-link' to="login">ВХОД</NavLink>
                }
                {/* <div onClick={(e) => {
                    setBurgerClass(`${st.navbar}`)
                }} className={st.close_block}></div> */}
            </header>
            <main className={st.main}>
                <Outlet />
            </main>
            <footer className={st.footer}>
                <strong>все права не защищены</strong>
            </footer>
        </div>
    )
})
