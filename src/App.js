import React, { useEffect } from "react";
import './styles/App.scss'
import { AppRouters } from './components/AppRouters'
import { userStore } from "./stores/UserStore";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const { setIsAuth, setLoading } = userStore;
  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      setIsAuth(false)
    }
    setLoading(false)
  }, [])


  return (
    <AppRouters />
  )
})

export default App;
