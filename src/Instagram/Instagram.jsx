import { InstagramEmbed } from "react-social-media-embed";
import style from "./Instagram.module.css";

export default function Instagram() {
	return (
		<div className={style.container}>
			<div className={style.post}>
				<InstagramEmbed
					url="https://www.instagram.com/p/DdEn2Xhq5iX/?hl=en"
					width={"100%"}
				/>
			</div>
		</div>
	);
}
