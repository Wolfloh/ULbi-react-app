import React from 'react'
import st from './MySelect.module.scss'

export const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            className={st.MySelect}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => {
                return <option className={st.option} key={option.value} value={option.value}>{option.name}</option>
            })}
        </select>
    )
}
