import { Outlet } from 'react-router'
import Navbar from './Navbar'
import style from '../styles/AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={style.background}>
      <Navbar />
      <Outlet />
    </div>
  )
}
