import React, { useEffect } from 'react'
import cl from './MyModal.module.css'


export const MyModal = ({ getModal, children, visible, setVisible }) => {

    useEffect(() => {
        console.log('getModal');
    }, [getModal])


    const rootClasses = [cl.myModal];
    if (visible) {
        rootClasses.push(cl.active)
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
