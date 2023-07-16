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


  function createIncrement() {
    let count = 0;
    function increment() {
      count++;
    }
    function messageCounter() {
      let message = `Count is ${count}`
      console.log(message);

    }
    return [increment, messageCounter];
  }
  const [increment, messageCounter] = createIncrement();
  increment();
  increment();
  increment();
  messageCounter()





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
