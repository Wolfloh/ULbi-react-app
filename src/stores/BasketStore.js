import { makeAutoObservable } from "mobx";

class BasketStore {
    constructor() {
        this.basketList = [
            {
                "id": 13,
                "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                "price": 599,
                "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
                "rating": {
                    "rate": 2.9,
                    "count": 250
                }
            },
            {
                "id": 12,
                "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
                "price": 114,
                "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
                "rating": {
                    "rate": 4.8,
                    "count": 400
                }
            },
            {
                "id": 14,
                "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                "price": 999.99,
                "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
                "rating": {
                    "rate": 2.2,
                    "count": 140
                }
            }
        ]
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