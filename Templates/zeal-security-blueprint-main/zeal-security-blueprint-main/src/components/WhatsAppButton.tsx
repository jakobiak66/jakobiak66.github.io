import whatsappIcon from "@/assets/whatsapp-icon.png";

export const WhatsAppButton = () => {
  const whatsappNumber = "+491634629993";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-3 z-50 flex items-center gap-2">
      <span className="hidden md:block text-white text-xs font-medium whitespace-nowrap bg-primary px-3 py-1.5 rounded-md shadow-md">
        Schreib uns auf WhatsApp
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 transition-all duration-300 hover:scale-110 drop-shadow-lg"
        aria-label="WhatsApp Kontakt"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
      </a>
    </div>
  );
};
