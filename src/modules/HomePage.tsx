import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import scrollDown from '../utils/functions/scrollDown.ts'
import Instagram from './Instagram.tsx'
import '../styles/ModuleStyles.css'

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Canto Café</h1>
      <div className="flex-container">
        <h2 className="text flex-top">
          Café 100% orgánico con Denominación de Origen, cultivado en armonía
          con las aves y la naturaleza desde 1890 en Pluma, Oaxaca.
        </h2>
        <h2 className="text">
          De la especie Coffea arabica, destaca por su cuerpo sutil, aroma
          excepcional y una acidez equilibrada que deleita en cada taza.
          Apoyamos a pequeños caficultores comprometidos con la calidad y la
          tierra.
        </h2>
      </div>
      <div className="follow">
        <h1 onClick={scrollDown}>
          <FontAwesomeIcon icon={faCircleDown} /> Síguenos en Redes{' '}
          <FontAwesomeIcon icon={faCircleDown} />
        </h1>
      </div>
      <div className="insta-container">
        <Instagram />
      </div>
    </div>
  )
}
