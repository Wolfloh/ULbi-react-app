import React, { useState } from 'react'
import cl from './SetEndlessPosts.module.css'


export const SetEndlessPosts = () => {
  const [firstRadio, setFirstRadio] = useState(`${cl.radio} ${cl.active}`);
  const [secondRadio, setSecondRadio] = useState(`${cl.radio}`);

  return (
    <div className={cl.radio__wrapper}>
      <div className={cl.radio__body}>
        <div
          onClick={() => {
            setFirstRadio(`${cl.radio} ${cl.active}`)
            setSecondRadio(`${cl.radio}`)
          }}
          className={firstRadio}>

        </div>
        <div className={cl.text}>
          Включить Бесконечную Ленту
        </div>
      </div>
      <div className={cl.radio__body}>
        <div
          onClick={() => {
            setSecondRadio(`${cl.radio} ${cl.active}`)
            setFirstRadio(`${cl.radio}`)
          }}
          className={secondRadio}>

        </div>
        <div className={cl.text}>
          Включить Пагинацию
        </div>
      </div>
    </div>
  )
}
