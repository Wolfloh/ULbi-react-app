import { observer } from 'mobx-react-lite'
import React from 'react'
import { productStore } from '../../../stores/ProductStore'
import cl from './TypeBar.module.scss'

export const TypeBar = observer(() => {
    const { categories, category, setCategory } = productStore;
    const getClassForButton = (type) => {
        if (category === type) {
            return `${cl.list__item} ${cl.active}`
        } else {
            return `${cl.list__item}`
        }
    }

    return (
        <aside className={cl.aside}>
            <div className={cl.list}>
                {categories.map(type =>
                    <button onClick={async () => {
                        if (category != type) { setCategory(type) }
                    }} className={getClassForButton(type)} key={type}>
                        <span className={cl.list__item_span}>
                            {type.toUpperCase()}
                        </span>
                    </button>)}
            </div>
        </aside >

    )
})
