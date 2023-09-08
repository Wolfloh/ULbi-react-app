import React, { useEffect, useState } from 'react'
import { BackAside } from '../../components/UI/BackAside/BackAside';
import { basket } from '../../stores/BasketStore'
import cl from './Basket.module.scss'
import { observer } from 'mobx-react-lite'
import checkMark from './checkMark.png'
import minus from './minus.png';
import plus from './plus.png';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../styles/App.scss';
import { MyButton } from '../../components/UI/button/MyButton'

const Basket = observer(() => {
    const { basketList, removeFromTheBasket } = basket;
    const [booleans, setBooleans] = useState([])
    const [costs, setCosts] = useState([])
    const [quantities, setQuantities] = useState([])
    let initialCosts;
    useEffect(() => {
        setBooleans(basketList.map(() => true));
        setQuantities(basketList.map(() => 1));
    }, [])
    initialCosts = JSON.parse(JSON.stringify(basketList)).map(i => Math.round(i.price));
    useEffect(() => {
        setCosts(initialCosts.map((cost, index) => cost * quantities[index]))
    }, [quantities])

    const cartWithTheAttribute = JSON.parse(JSON.stringify(basketList));
    cartWithTheAttribute
        .forEach((prod, index) => prod.checked = booleans[index])

    const theFinalBasket =
        cartWithTheAttribute.filter(i => i.checked === true);
    theFinalBasket.forEach(i => delete i.checked)
    let totalQuantity;
    if (quantities.length) {
        totalQuantity = quantities.reduce((acc, num, index) => {
            if (!booleans[index]) {
                return acc + 0
            }
            return acc + num
        }, 0)
    }

    let totalCost;
    if (costs.length) {
        totalCost = costs.reduce((acc, cost, index) => {
            if (!booleans[index]) {
                return acc + 0
            }
            return Math.round(acc + cost);
        }, 0)
    }

    if (!basketList.length) {
        return (
            <div className={cl.empty_wrapper}>
                <BackAside />
                <h2 className={cl.empty_cart}>В корзине пока что ничего нет</h2>
                <Link to={'/my-react-app/shop'}>
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
                                    <Link to={`/my-react-app/shop/${product.id}`} className={cl.items__product}>
                                        <div className={cl.items__image_wrapper}>
                                            <img className={cl.items__image} src={product.image} alt="product__image" />
                                        </div>
                                        <h2 className={cl.items__title}>{product.title}</h2>
                                        <h2 className={cl.items__price}>
                                            <div className={cl.items__price_one}>{Math.round(product.price)}$</div>
                                            <div>({costs[index]}$)</div>
                                        </h2>
                                    </Link>
                                    <div className={cl.items__counter_wrapper}>
                                        <button onClick={() => {
                                            let newQuantities = [...quantities];
                                            newQuantities[index] = quantities[index] + 1;
                                            setQuantities(newQuantities)
                                        }}>
                                            <img className={cl.items__counter_plus} src={plus} alt="plus" />
                                        </button>
                                        <h4 className={cl.items__counter_quantity}>
                                            {quantities[index]}
                                        </h4>
                                        <button
                                            className={
                                                quantities[index] === 1
                                                    ?
                                                    cl.opacity
                                                    :
                                                    void 0
                                            }
                                            onClick={() => {
                                                if (!(quantities[index] === 1)) {
                                                    let newQuantities = [...quantities];
                                                    newQuantities[index] = quantities[index] - 1;
                                                    setQuantities(newQuantities)
                                                }
                                            }}>
                                            <img
                                                className={
                                                    quantities[index] === 1
                                                        ?
                                                        `${cl.opacity} ${cl.items__counter_minus}`
                                                        :
                                                        cl.items__counter_minus
                                                }
                                                src={minus}
                                                alt="minus" />
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => {
                                            let newQuantities = [...quantities];
                                            newQuantities.splice(index, 1)
                                            setQuantities(newQuantities)
                                            let newCosts = [...costs];
                                            newCosts.splice(index, 1)
                                            setCosts(newCosts)
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
                    <div className={cl.order_total}>Всего: {totalCost}$ ({totalQuantity})</div>
                </div>
            </div>

        </>

    )
})

export { Basket }

