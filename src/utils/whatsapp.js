export const WHATSAPP_NUMBER = "97430612147";

export function buildWhatsAppUrl({ name, email, phone, service, message }) {
  const text = [
    "*Al Tabiaa Cooling Service — New Inquiry*",
    "",
    `*Name:* ${name}`,
    `*Email:* ${email}`,
    `*Phone:* ${phone}`,
    `*Service:* ${service}`,
    "",
    "*Message:*",
    message,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function submitToWhatsApp(formData) {
  window.open(buildWhatsAppUrl(formData), "_blank", "noopener,noreferrer");
}
