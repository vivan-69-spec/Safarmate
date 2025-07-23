const handleWhatsApp = () => {
    const phoneNumber = "+919058014582";
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};
export { handleWhatsApp };