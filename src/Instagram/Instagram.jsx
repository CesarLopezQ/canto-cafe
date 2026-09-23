import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import style from "./Instagram.module.css";
import { InstagramEmbed } from "react-social-media-embed";

export default function Instagram() {
	const instagramPosts = [
		"https://www.instagram.com/p/Ddm8ERjRZ0G/",
		"https://www.instagram.com/p/DdEn2Xhq5iX/",
		"https://www.instagram.com/p/DDAbgA-yaYL/",
		"https://www.instagram.com/p/C25vN1nSSWh/",
		"https://www.instagram.com/p/ClhoaLtpcHm/",
	];

	return (
		<Swiper
			modules={[Autoplay]}
			slidesPerView={1}
			spaceBetween={10}
			speed={1200}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			breakpoints={{
				640: { slidesPerView: 2 },
				900: { slidesPerView: 3 },
			}}
			loop={true}>
			{instagramPosts.map((url) => (
				<SwiperSlide
					className={style.container}
					key={url}>
					<div className={style.post}>
						<InstagramEmbed url={url} />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
