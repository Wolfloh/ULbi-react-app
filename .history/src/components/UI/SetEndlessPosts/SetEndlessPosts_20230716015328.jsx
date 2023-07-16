import React from 'react'
import cl from './SetEndlessPosts.module.css'


export const SetEndlessPosts = () => {
  const [firstRadio, setFirstRadio] = useState('.radio.active');
  const [secondRadio, setSecondRadio] = useState('.radio');

  return (
    <div className={cl.radio__wrapper}>
      <div className={cl.radio__body}>
        <div className={cl.radio}>

        </div>
        <div className={cl.text}>
          Включить Бесконечную Ленту
        </div>
      </div>
      <div className={cl.radio__body}>
        <div className={cl.radio}>

        </div>
        <div className={cl.text}>
          Включить Пагинацию
        </div>
      </div>
    </div>
  )
}
