import { useState, useEffect } from 'react'
import SplashScreen from './modules/SplashScreen.tsx'
import AppLayout from './modules/AppLayout.tsx'
import style from './styles/App.module.css'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={style.siteView}>
      {isLoading ? (
        <div className={style.splash}>
          <SplashScreen />
        </div>
      ) : (
        <AppLayout />
      )}
    </div>
  )
}
