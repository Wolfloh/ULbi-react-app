import React, { useState } from 'react'
import cl from './SetEndlessPosts.module.css'


export const SetEndlessPosts = ({ setObserve }) => {
  const [firstRadio, setFirstRadio] = useState(`${cl.radio} ${cl.active}`);
  const [secondRadio, setSecondRadio] = useState(`${cl.radio}`);

  return (
    <div className={cl.radio__wrapper}>
      <div
        onClick={() => {
          setFirstRadio(`${cl.radio} ${cl.active}`)
          setSecondRadio(`${cl.radio}`)
          setObserve(true)
        }}
        className={cl.radio__body}>
        <div
          className={firstRadio}>

        </div>
        <div className={cl.text}>
          Включить Бесконечную Ленту
        </div>
      </div>
      <div
        onClick={() => {
          setSecondRadio(`${cl.radio} ${cl.active}`)
          setFirstRadio(`${cl.radio}`)
          setObserve(false)
        }}
        className={cl.radio__body}>
        <div className={secondRadio}>

        </div>
        <div className={cl.text}>
          Включить Пагинацию
        </div>
      </div>
    </div>
  )
}
