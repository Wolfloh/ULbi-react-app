import React, { useEffect } from 'react'
import { productStore } from '../../../stores/ProductStore'
import cl from './Products.module.scss'
import { observer } from "mobx-react-lite";
import { Loader } from '../Loader/Loader';
import { ComponentError } from '../ComponentError/ComponentError.jsx';
import { Link } from 'react-router-dom';


export const Products = observer(() => {
    const { products, isLoading, error, category, setCategory } = productStore;
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


    return (
        <div className={cl.products}>
            {products.map(product =>
                <Link to={`${product.id}`} key={product.id} className={cl.products__item}>
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
                </Link>
            )}
        </div>
    )
})
