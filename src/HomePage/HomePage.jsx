import style from "./HomePage.module.css";
import Instagram from "@/Instagram/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import scrollDown from "@/SupportFunctions/scrollDown.js";
import NavBar from "@/NavBar/NavBar.jsx";

export default function HomePage() {
	return (
		<div className={style.container}>
			<NavBar />
			<h1 className={style.title}>Canto Café</h1>
			<div className={style.story}>
				<h2 className={style.storyFirstParragraph}>
					Café 100% orgánico con Denominación de Origen, cultivado en armonía con las aves y la naturaleza
					desde 1890 en Pluma, Oaxaca.
				</h2>
				<h2>
					De la especie Coffea arabica, destaca por su cuerpo sutil, aroma excepcional y una acidez
					equilibrada que deleita en cada taza. Apoyamos a pequeños caficultores comprometidos con la calidad
					y la tierra.
				</h2>
			</div>
			<div className={style.follow}>
				<h1 onClick={scrollDown}>
					<FontAwesomeIcon icon={faCircleDown} /> Síguenos en Redes <FontAwesomeIcon icon={faCircleDown} />
				</h1>
			</div>
			<div className={style.instaContainer}>
				<Instagram />
			</div>
		</div>
	);
}
