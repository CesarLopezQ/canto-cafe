import { useState, useEffect } from "react";
import HomePage from "@/HomePage/HomePage.jsx";
import SplashScreen from "@/Splash/SplashScreen.jsx";
import style from "./Main.module.css";

export default function Main() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={style.siteView}>
			{isLoading ?
				<div className={style.splash}>
					<SplashScreen />
				</div>
			:	<HomePage />}
		</div>
	);
}
