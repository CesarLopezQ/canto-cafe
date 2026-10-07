import style from '../styles/CoffeeFacts.module.css'

export default function CoffeeFacts() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Coffee Facts</h1>
      <div className={style.textContainer}>
        <h2 className={style.textBlock}>
          El cultivo de nuestra variedad se combina con árboles más altos que le
          brindan sombra. La sombra es un elemento necesario para la
          biodiversidad. De hecho, es el hogar perfecto para las más de 100
          especies de aves que ahí habitan. Pluma Hidalgo es un rincón de la
          sierra oaxaqueña a más de 1000 mt de altura donde la tierra nos regala
          el café más sofisticado y natural de México, reconocido mundialmente
          como un café de especialidad.
        </h2>
        <h2 className={style.textBlock}>
          El hecho de que el café sea sembrado bajo sombra crea microclimas en
          la región de Pluma. Su cercanía a la Costa cuya salinidad permea la
          tierra, aunado a un ciclo lunar y una posición geográfica especial, es
          algo digno de resaltar. Sus chubascos por la tarde mantienen un suelo
          húmedo y una temperatura promedio de 20C proporcionan al grano un
          sabor constante que se caracteriza por sus notas afrutadas. El
          equilibrio de la naturaleza se refleja en una taza de café
          inolvidable.
        </h2>
      </div>
    </div>
  )
}
