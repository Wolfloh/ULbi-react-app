import cl from './ProductPage.module.scss'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../hooks/useFetching';
import axios from 'axios';
import { useEffect } from 'react';
import { Loader } from '../../components/UI/Loader/Loader.jsx'
import { BackAside } from '../../components/UI/BackAside/BackAside';
import { basket } from '../../stores/BasketStore';
import checkMark from './checkMark.png'
import { observer } from 'mobx-react-lite';

const ProductPage = observer(() => {
    const { basketList, addToCart, removeFromTheBasket } = basket;
    const { product } = useParams();
    const [prod, setProd] = useState('')
    const [getProduct, isLoading, error] = useFetching(async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${product}`)
            setProd(res.data)
        } catch (err) {
            console.log(err);
        }
    })
    const added = basketList.filter(i => i.id === prod.id).length;

    const getRating = (rate) => {
        if (rate > 4) {
            return cl.product__rate_green
        } else if (rate > 3) {
            return cl.product__rate_yellow
        } else {
            return cl.product__rate_red
        }
    }
    useEffect(() => {
        getProduct()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <BackAside />
            <div className={cl.product}>
                <div className={cl.product__img_wrapper}>
                    <img src={prod.image} />
                </div>
                <div className={cl.product__title_rate}>
                    <h2 className={cl.product__title}>{prod.title}</h2>
                    <div className={cl.product__rate_wrapper}>
                        <span className={`${getRating(prod.rating?.rate)} ${cl.product__rate}`}>
                            {prod.rating?.rate}
                        </span>
                        <div className={cl.product__reviews}>/ reviews {prod.rating?.count}</div>
                    </div>
                </div>
                <p className={cl.product__description}>
                    {prod.id === 20
                        ?
                        `95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/ Office/ Beach/ School/ Home/ Street. Season: Spring, Summer, Autumn, Winter.`
                        :
                        prod.description
                    }
                </p>
                <div className={cl.product__price_basket}>
                    <h2 className={cl.product__price}>{prod.price}$</h2>
                    <button onClick={() => {
                        if (added) {
                            removeFromTheBasket(prod.id)
                        } else {
                            addToCart(prod)
                        }
                    }} className={cl.product__basket}>
                        {added
                            ?
                            <img src={checkMark} alt="checkMark" />
                            :
                            <div>
                                В корзину
                            </div>
                        }
                    </button>
                </div>
            </div>
        </>
    )
})



export { ProductPage };