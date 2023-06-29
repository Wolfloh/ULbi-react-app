import React from 'react'
import { useParams } from 'react-router-dom'


export const Singlepage = () => {

    const { id } = useParams()
    return (
        <div>{id}</div>
    )
}
