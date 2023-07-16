import React, { useState, useEffect } from "react";
import './styles/App.css'
import { AuthContext } from "./context/index.js";
import { AppRouters } from './components/AppRouters'



function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])




  const getAsyncFunc = () => {
    new Promise((resolve, reject) => {

      setTimeout(() => {
        console.log('Hello world');
        resolve()
      }, 2000)

    })
  }

  getAsyncFunc()
    .then(() => {
      setTimeout(() => {
        console.log('Hello world 2');
      }, 2000)
    })











  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <AppRouters />
    </AuthContext.Provider>
  )
}

export default App;
