import whatsapp from '../utils/links/whatsapp.ts'
import style from '../styles/Navbar.module.css'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div className={style.navContainer}>
      <Link to="/" className={`${style.navElement} ${style.leftCorner}`}>
        Home
      </Link>
      <Link to="/calidad" className={style.navElement}>
        Calidad
      </Link>
      <Link to="/sabor" className={style.navElement}>
        Sabor
      </Link>
      <Link to="/fair-trade" className={style.navElement}>
        Fair Trade
      </Link>
      <Link to="/coffee-facts" className={style.navElement}>
        Coffee Facts
      </Link>
      <div
        className={`${style.navElement} ${style.rightCorner}`}
        onClick={whatsapp}
      >
        <p>Realiza tu Pedido</p>
      </div>
    </div>
  )
}
