import whatsapp from '../utils/links/whatsapp.ts'
import style from '../styles/Navbar.module.css'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className={style.navContainer}>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          [
            style.navElement,
            style.leftCorner,
            isActive && style.active,
            isPending && style.pending,
          ]
            .filter(Boolean)
            .join(' ')
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/calidad"
        className={({ isActive, isPending }) =>
          [
            style.navElement,
            isActive && style.active,
            isPending && style.pending,
          ]
            .filter(Boolean)
            .join(' ')
        }
      >
        Calidad
      </NavLink>
      <NavLink
        to="/sabor"
        className={({ isActive, isPending }) =>
          [
            style.navElement,
            isActive && style.active,
            isPending && style.pending,
          ]
            .filter(Boolean)
            .join(' ')
        }
      >
        Sabor
      </NavLink>
      <NavLink
        to="/fair-trade"
        className={({ isActive, isPending }) =>
          [
            style.navElement,
            isActive && style.active,
            isPending && style.pending,
          ]
            .filter(Boolean)
            .join(' ')
        }
      >
        Fair Trade
      </NavLink>
      <NavLink
        to="/coffee-facts"
        className={({ isActive, isPending }) =>
          [
            style.navElement,
            isActive && style.active,
            isPending && style.pending,
          ]
            .filter(Boolean)
            .join(' ')
        }
      >
        Coffee Facts
      </NavLink>
      <div
        className={`${style.navElement} ${style.rightCorner}`}
        onClick={whatsapp}
      >
        <p onClick={whatsapp}>Realiza tu Pedido</p>
      </div>
    </div>
  )
}
