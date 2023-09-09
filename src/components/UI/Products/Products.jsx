import React, { useEffect, useState } from 'react'
import { productStore } from '../../../stores/ProductStore'
import cl from './Products.module.scss'
import { observer } from "mobx-react-lite";
import { Loader } from '../Loader/Loader';
import { ComponentError } from '../ComponentError/ComponentError.jsx';
import { Link } from 'react-router-dom';
import { basket } from '../../../stores/BasketStore';
import green_mark from './green_mark.png'


export const Products = observer(() => {
    const { products, isLoading, error, category, setCategory } = productStore;
    const { basketList, addToCart, removeFromTheBasket } = basket;
    const [linkState, setLinkState] = useState(``)
    useEffect(() => { setCategory(category) }, []);
    const getRating = (rate) => {
        if (rate > 4) {
            return cl.products__rate_green
        } else if (rate > 3) {
            return cl.products__rate_yellow
        } else {
            return cl.products__rate_red
        }
    }
    if (isLoading) {
        return <Loader />
    } else if (error) {
        return <ComponentError />
    }

    let markForClick = true;
    let flag;
    return (
        <div className={cl.products}>
            {products.map(product =>
                <Link
                    onMouseDown={() => {
                        markForClick = true;
                        flag = true;
                        setTimeout(() => {
                            if (markForClick) {
                                const added = basketList.filter(prod => prod.id === product.id).length;
                                if (added) {
                                    removeFromTheBasket(product.id)
                                    flag = false;
                                } else {
                                    addToCart(product)
                                }
                                markForClick = false;
                            }
                        }, 300)
                    }}
                    onMouseUp={() => {
                        if (!flag) {
                            markForClick = false;
                        }
                        if (markForClick) {
                            setLinkState(`${product.id}`)
                        }
                        markForClick = false;
                    }}
                    to={linkState}
                    key={product.id}
                    className={cl.products__item}>
                    <div className={cl.products__img_wrapper}>
                        <img className={cl.products__img} src={product.image} alt={product.title} />
                    </div>
                    <div className={cl.products__desc}>
                        <h5 className={cl.products__title}>{product.title}</h5>
                        <h5 className={`${getRating(product.rating.rate)} ${cl.products__rate}`}>
                            {product.rating.rate}
                        </h5>
                    </div>
                    <div className={cl.products__price}>{product.price}$</div>
                    <div className={cl.products__add}>
                        {basketList.filter(prod => prod.id === product.id).length
                            ?
                            <img className={cl.products__add_mark} src={green_mark} alt="green_mark" />
                            :
                            <div className={cl.products__add_text}>Удерживайте для добавления в корзину</div>
                        }
                    </div>
                </Link>
            )}
        </div>
    )
})
