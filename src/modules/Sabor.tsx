import '../styles/ModuleStyles.css'
import cata from '../assets/images/cata.png'

export default function Sabor() {
  return (
    <div className="container">
      <h1 className="title">Sobre el Sabor</h1>
      <h2 className="text">
        El tostado de la variedad Pluma término medio/alto, también conocido
        como ‘ropa de monje’, por su color café marrón oscuro y sabor con notas
        de chocolate, moras rojas y textura oleaginosa, lo hace muy versátil
        para cualquier tipo de filtrado. Dado que su acidez es muy noble al
        estómago no es extraño querer repetir otra taza.
      </h2>
      <h1 className="title">Cata</h1>
      <h2 className="text">
        Se trata de un café de cuerpo medio y acidez muy moderada. Es un café de
        sabor intenso pero que mantiene multitud de notas sutiles en su aroma.
      </h2>
      <img src={cata} />
    </div>
  )
}
