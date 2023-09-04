import { makeAutoObservable } from "mobx";

class BasketStore {
    constructor() {
        this.basketList = []
        makeAutoObservable(this)
    }
    addToCart = (product) => {
        this.basketList.unshift(product)
    }
    removeFromTheBasket = (id) => {
        const newBasket = this.basketList.filter(p => p.id !== id);
        this.basketList = newBasket;
    }
}

const basket = new BasketStore();

export { basket };