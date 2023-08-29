import React from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './BackAside.module.scss'


export const BackAside = () => {
    const navigate = useNavigate();

    return (
        <aside onClick={() => navigate(-1)} className={cl.back__wrapper}>
            <div className={cl.back__text}>назад</div>
        </aside>
    )
}
