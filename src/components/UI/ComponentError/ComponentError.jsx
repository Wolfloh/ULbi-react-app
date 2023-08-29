import React from 'react'
import cl from './ComponentError.module.scss'

export const ComponentError = () => {
    return (
        <div className={cl.error}>
            ПРОИЗОШЛА ОШИБКА
        </div>
    )
}
