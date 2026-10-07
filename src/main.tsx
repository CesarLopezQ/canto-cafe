import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import HomePage from './modules/HomePage'
import AppLayout from './modules/AppLayout'
import Calidad from './modules/Calidad'
import Sabor from './modules/Sabor'
import FairTrade from './modules/FairTrade'
import CoffeeFacts from './modules/CoffeeFacts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="calidad" element={<Calidad />} />
          <Route path="sabor" element={<Sabor />} />
          <Route path="fair-trade" element={<FairTrade />} />
          <Route path="coffee-facts" element={<CoffeeFacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
