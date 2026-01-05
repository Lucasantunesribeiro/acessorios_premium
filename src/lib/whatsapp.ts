export const buildWhatsappUrl = (phone: string, message: string) => {
  const sanitized = phone.replace(/\D/g, "");
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
};
