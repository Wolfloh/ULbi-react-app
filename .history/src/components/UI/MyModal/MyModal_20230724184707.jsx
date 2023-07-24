import React, { useEffect } from 'react'
import cl from './MyModal.module.css'


export const MyModal = ({ children, visible, setVisible }) => {


    const rootClasses = [cl.myModal];
    if (visible) {
        rootClasses.push(cl.active)
    }

    if (true) {
        console.log('rerender modal');

    }

    return (
        <div onClick={() => {
            setVisible(false)
        }} className={rootClasses.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={cl.myModalContent}>
                {children}
            </div>
        </div>
    )
}
