import React, { useState } from 'react'
import cl from './SetEndlessPosts.module.scss'


export const SetEndlessPosts = ({ setObserve }) => {
  const [firstRadio, setFirstRadio] = useState(`${cl.radio__button} ${cl.active}`);
  const [secondRadio, setSecondRadio] = useState(`${cl.radio__button}`);

  return (
    <div className={cl.radio}>
      <div
        onClick={() => {
          setFirstRadio(`${cl.radio__button} ${cl.active}`)
          setSecondRadio(`${cl.radio__button}`)
          setObserve(true)
        }}
        className={cl.radio__body}>
        <div
          className={firstRadio}>

        </div>
        <div className={cl.radio__text}>
          Включить Бесконечную Ленту
        </div>
      </div>
      <div
        onClick={() => {
          setSecondRadio(`${cl.radio__button} ${cl.active}`)
          setFirstRadio(`${cl.radio__button}`)
          setObserve(false)
        }}
        className={cl.radio__body}>
        <div className={secondRadio}>

        </div>
        <div className={cl.radio__text}>
          Включить Пагинацию
        </div>
      </div>
    </div>
  )
}
