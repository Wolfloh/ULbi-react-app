import { makeAutoObservable } from "mobx";


class UserStore {
    constructor() {
        this.isAuth = true;
        this.isLoading = false;
        this.user = {}
        makeAutoObservable(this)
    }
    setLoading = (bool) => {
        this.isLoading = bool;
    }
    setIsAuth = (bool) => {
        this.isAuth = bool
    }
    setUser = (user) => {
        this.user = user
    }
}

const userStore = new UserStore();

export { userStore };
