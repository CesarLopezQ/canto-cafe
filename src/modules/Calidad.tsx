import style from '../styles/Calidad.module.css'

export default function Calidad() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Sobre la Calidad</h1>
      <div className={style.storyContainer}>
        <h2 className={`${style.storyBlock} ${style.top}`}>
          Nuestros granos están seleccionados desde el arbusto hasta su tostado,
          la calidad de cada lote se comprueba en su uniformidad y tamaño de
          cada semilla. La producción es en finca 100% orgánica y libre de
          pesticidas. Canto Café se suma al compromiso de cuidar el medio
          ambiente.
        </h2>
        <h2 className={`${style.storyBlock} ${style.top}`}>
          Nuestra Especie C. Arábiga, de la variedad Pluma y Bourbon es abonada
          con composta resultante del mismo proceso productivo (hoja seca,
          semillas, pulpa, cáscara y tierra). Esto le brinda su sabor
          característico sin conservadores y recolectado con la misma pasión
          desde el siglo XIX en las alturas de la sierra madre oriental en Pluma
          Hidalgo, Oaxaca.
        </h2>
        <h2 className={`${style.storyBlock} ${style.top}`}>
          El cultivo de nuestra variedad de Origen se combina con árboles más
          altos para proporcionarle sombra. Esto fomenta la biodiversidad de
          este bosque subcaducifolio que protege centenares de especies animales
          que habitan libremente en total balance con la comunidad. Canto Café
          se compromete a llevar a tu hogar un producto 100% natural cultivado
          con los mismos procedimientos a lo largo de 5 generaciones.{' '}
        </h2>
        <h2 className={`${style.storyBlock} ${style.bottom}`}>
          Considerado dentro de los mejores cafés del mundo, la variedad Pluma
          con Denominación de Origen satisface a los paladares más exigentes. No
          importa qué tipo de colado utilices para preparar tu café tu taza
          siempre encerrará un ave en cada grano. 100% Natural, Sin Pesticidas,
          en tostado ‘ropa de monje’ ideal para quien gusta de un sabor intenso
          de baja acidez sin sacrificar sus notas aromáticas.
        </h2>
        <h2 className={`${style.storyBlock} ${style.bottom}`}>
          La sustentabilidad es primordial para cuidar el planeta. Los
          productores de Pluma Hidalgo han protegido su tierra con el fin de
          ofrecer un café de Denominación de Origen de la más alta calidad
          mediante procesos controlados y documentados que le permiten ofrecer
          al consumidor una producción libre de fertilizantes y pesticidas
          químicos. Canto Café está comprometido en llevar a tu hogar un café
          fresco en grano tostado hecho en México con técnicas saludables que
          cuidan tu salud y el ambiente.{' '}
        </h2>
      </div>
    </div>
  )
}
