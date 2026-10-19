import whatsapp from '../utils/links/whatsapp.ts'
import style from '../styles/Navbar.module.css'
import { NavLink } from 'react-router'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true)
  function closeMenu() {
    setIsOpen(false)
  }
  function handleWhatsappClose() {
    closeMenu()
    whatsapp()
  }

  return (
    <div className={style.navShell}>
      <div className={`${style.navContainer} ${isOpen ? style.open : ''}`}>
        <button
          type="button"
          className={`${style.navElement} ${style.menuButton}`}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
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
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={() => setIsOpen(false)}
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
          onClick={closeMenu}
        >
          Coffee Facts
        </NavLink>
        <div
          className={`${style.navElement} ${style.rightCorner}`}
          onClick={handleWhatsappClose}
        >
          <p onClick={whatsapp}>Realiza tu Pedido</p>
        </div>
      </div>
    </div>
  )
}
