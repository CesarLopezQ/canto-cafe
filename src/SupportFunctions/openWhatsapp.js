export default function openWhatsapp() {
	const phoneNumber = "+526647833744";
	const formattedNumber = phoneNumber.replace(/[^\d]/g, "");
	const url = `https://wa.me/${formattedNumber}`;

	window.open(url, "_blank", "noopener, noreferrer");
}
