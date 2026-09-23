import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import style from "./NavBar.module.css";
import openWhatsapp from "@/Support Functions/openWhatsapp.js";

export default function NavBar() {
	return (
		<p
			className={style.navBar}
			onClick={openWhatsapp}>
			Ordena Aquí! <FontAwesomeIcon icon={faWhatsapp} />
		</p>
	);
}
