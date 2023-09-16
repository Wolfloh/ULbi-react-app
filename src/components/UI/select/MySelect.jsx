import React, { useState } from 'react'
import st from './MySelect.module.scss'
import corner from './corner.png';

export const MySelect = ({ options, defaultValue, value, onChange }) => {
    const [selectValue, setSelectValue] = useState(defaultValue)
    const [selectClass, setSelectClass] = useState(`${st.select}`)
    return (
        <button className={selectClass}>
            <div onClick={() => {
                if (selectClass.includes(`${st.select_active}`)) {
                    setSelectClass(`${st.select}`)
                } else {
                    setSelectClass(`${st.select} ${st.select_active}`)
                }
            }} className={st.select_header}>
                {selectValue}
                <img className={st.select_icon} src={corner} alt="corner" />
            </div>
            <div className={st.select_body}>
                <div className={st.select_disabled}>{defaultValue}</div>
                {options.map(option =>
                    <div onClick={(e) => {
                        setSelectValue(option.name)
                        onChange(option.value)
                    }} className={
                        selectValue === option.name
                            ?
                            `${st.select_option} ${st.select_option_active}`
                            :
                            st.select_option
                    } key={option.value}>{option.name}</div>)}
            </div>
        </button>
    )
}
