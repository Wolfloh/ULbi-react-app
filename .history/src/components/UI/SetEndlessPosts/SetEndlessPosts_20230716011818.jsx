import React from 'react'
import cl from './SetEndlessPosts.module.css'


export const SetEndlessPosts = () => {
  return (
    <div>
      <div className={cl.radio__wrapper}>
        <div className={cl.radio}>

        </div>
        <div className={cl.text}>
          Включить Бесконечную Ленту
        </div>
      </div>
      <div className={cl.radio__wrapper}>
        <div className={cl.radio}>

        </div>
        <div className={cl.text}>
          Включить Пагинацию
        </div>
      </div>
    </div>
  )
}
