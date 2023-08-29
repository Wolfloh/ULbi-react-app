import React, { useEffect, useState } from 'react'
import { BackAside } from '../../components/UI/BackAside/BackAside';
import { basket } from '../../stores/BasketStore'
import cl from './Basket.module.scss'
import { observer } from 'mobx-react-lite'
import checkMark from './checkMark.png'
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../styles/App.scss';
import { MyButton } from '../../components/UI/button/MyButton'

const Basket = observer(() => {
    const { basketList, removeFromTheBasket } = basket;
    const [booleans, setBooleans] = useState([])
    useEffect(() => {
        setBooleans(basketList.map(() => true))
    }, [])
    const cartWithTheAttribute = JSON.parse(JSON.stringify(basketList));
    cartWithTheAttribute
        .forEach((prod, index) => prod.checked = booleans[index])

    const theFinalBasket =
        cartWithTheAttribute.filter(i => i.checked === true);
    theFinalBasket.forEach(i => delete i.checked)


    if (!basketList.length) {
        return (
            <div className={cl.empty_wrapper}>
                <BackAside />
                <h2 className={cl.empty_cart}>В корзине пока что ничего нет</h2>
                <Link to={'/shop'}>
                    <MyButton>Добавить</MyButton>
                </Link>
            </div>
        )
    }

    return (
        <>
            <BackAside />
            <div className={cl.basket_body}>
                <ul className={cl.items_wrapper}>
                    <TransitionGroup className={cl.items}>
                        {basketList.map((product, index) => {
                            return <CSSTransition key={product.id} timeout={300} classNames='items__item'>
                                <li key={product.id} className={cl.items__item}>
                                    <section>
                                        <input
                                            onChange={() => {
                                                let arr = [...booleans]
                                                arr[index] = !booleans[index];
                                                setBooleans(arr)
                                            }}
                                            checked={booleans.length > 0 && booleans[index]}
                                            type="checkbox"
                                            id={product.id}
                                            className={cl.items__input}
                                        />
                                        <label className={cl.items__checkbox} htmlFor={product.id}>
                                            <img src={checkMark} alt="checkMark" />
                                        </label>
                                    </section>
                                    <Link to={`/shop/${product.id}`} className={cl.items__product}>
                                        <div className={cl.items__image_wrapper}>
                                            <img className={cl.items__image} src={product.image} alt="product__image" />
                                        </div>
                                        <h2 className={cl.items__title}>{product.title}</h2>
                                        <h2 className={cl.items__price}>{product.price}$</h2>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            removeFromTheBasket(product.id)
                                            let newBooleans = [...booleans];
                                            newBooleans.splice(index, 1);
                                            setBooleans(newBooleans)
                                        }}
                                        className={cl.items__delete}>
                                        удалить
                                    </button>
                                </li>
                            </CSSTransition>
                        }
                        )}
                    </TransitionGroup>
                </ul>
                <div className={cl.order_wrapper}>
                    <button className={cl.order}>оформить заказ</button>
                    <div className={cl.order_total}>Всего: {theFinalBasket.length}</div>
                </div>
            </div>

        </>

    )
})

export { Basket }