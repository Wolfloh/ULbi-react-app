
import axios from "axios";
import { makeAutoObservable } from "mobx";


class ProductStore {
    constructor() {
        this.categories = [
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
        ]
        this.category = "jewelery"
        this.isLoading = false;
        this.error = null;
        this.products = []
        makeAutoObservable(this)
    }
    setCategory = async (category) => {
        try {
            this.category = category;
            this.isLoading = true;
            const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            this.products = res.data;
        } catch (e) {
            this.error = e.message;
            console.error(e);
        } finally {
            this.isLoading = false;
        }
    }
    setCategories = (categories) => {
        this.categories = categories;
    }
}

const productStore = new ProductStore();

export { productStore };
