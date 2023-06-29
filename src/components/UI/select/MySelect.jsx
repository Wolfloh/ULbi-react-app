import React from 'react'


export const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            style={{ padding: '10px', textAlign: 'center' }}
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
