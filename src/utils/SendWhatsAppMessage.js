export default function sendWhatsAppMessage(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${9663745749}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

}