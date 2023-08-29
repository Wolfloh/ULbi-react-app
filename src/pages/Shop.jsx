import React from 'react'
import '../styles/App.scss'
import { TypeBar } from '../components/UI/TypeBar/TypeBar.jsx'
import { Products } from '../components/UI/Products/Products.jsx'
export const Shop = () => {
    return (
        <div className='shop-wrapper'>
            <TypeBar />
            <Products />
        </div>
    )
}
