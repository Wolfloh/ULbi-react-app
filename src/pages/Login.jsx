import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MyButton } from '../components/UI/button/MyButton'
import { userStore } from '../stores/UserStore'
import '../styles/App.scss'
import { observer } from 'mobx-react-lite'

export const Login = observer(() => {
    const location = useLocation();
    const [stringLogin, setStringLogin] = useState('')
    const [stringPass, setStringPass] = useState('')
    const [correctInput, setCorrectInput] = useState(true)
    let fromPage;
    if (location.state) {
        fromPage = location.state.from;
    } else {
        fromPage = '/'
    }
    const { setIsAuth } = userStore;
    const navigate = useNavigate();


    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h1 className='login__title'>
                    Вход
                </h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (
                        !stringLogin.match(/[a-z|а-я|A-Z|А-Я]/)
                        ||
                        !(stringLogin.length >= 5)
                        ||
                        !stringPass.match(/[a-z|а-я|A-Z|А-Я]/)
                        ||
                        !(stringPass.length >= 5)
                    ) {
                        setCorrectInput(false)
                        return;
                    }
                    setCorrectInput(true)
                    setIsAuth(true);
                    localStorage.setItem('auth', 'true');
                    navigate(`${fromPage}`, { replace: true });
                }
                } className='login__form'>
                    <input
                        autoComplete='on'
                        className='login__input'
                        type='text'
                        placeholder='Введите логин'
                        value={stringLogin}
                        onInput={e => setStringLogin(e.target.value)}
                        name='login'
                    />
                    <input
                        autoComplete='on'
                        className='login__input'
                        type='password'
                        placeholder='Введите пароль'
                        value={stringPass}
                        onInput={e => setStringPass(e.target.value)}
                        name='password'
                    />
                    {!correctInput
                        ?
                        <div className='login__error'>логин и пароль должны содержать не менее 5 символов и иметь буквы</div>
                        :
                        void 0
                    }
                    <MyButton>Войти</MyButton>
                </form>
                <div className='login__from'>Пришел из {fromPage}</div>
            </div>
        </div>
    )
})
