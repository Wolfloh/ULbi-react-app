import React, { useEffect } from "react";
import './styles/App.scss'
import { AppRouters } from './components/AppRouters'
import { userStore } from "./stores/UserStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
const App = observer(() => {
  const { setIsAuth, setLoading } = userStore;
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      setIsAuth(false)
    }
    setLoading(false)
    window.addEventListener('keydown', (e) => {
      if (e.code === "ArrowLeft") {
        navigate(-1)
      }
    })
  }, [])


  return (
    <AppRouters />
  )
})

export default App;
