import React from 'react'
import st from './MySelect.module'

export const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            className={cl.MySelect}

            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.name}</option>
            })}
        </select>
    )
}
