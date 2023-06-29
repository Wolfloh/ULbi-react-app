import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MyButton } from '../components/UI/button/MyButton'
import { AuthContext } from '../context'
import '../styles/App.css'


export const Login = () => {
    const location = useLocation();
    let fromPage;
    if (location.state) {
        fromPage = location.state.from;
    } else {
        fromPage = '/'
    }
    const { setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className='login__wrapper'>
            <h1 className='login__title'>
                Регистрация
            </h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsAuth(true);
                localStorage.setItem('auth', 'true');
                navigate(`${fromPage}`, { replace: true });
            }
            } className='login__form'>
                <input autoComplete='on' className='login__input' type='text' placeholder='Введите логин' />
                <input autoComplete='on' className='login__input' type='password' placeholder='Введите пароль' />
                <MyButton>Войти</MyButton>
            </form>
            <div style={{ marginTop: '100px' }}>Пришел из {fromPage}</div>
        </div>
    )
}
