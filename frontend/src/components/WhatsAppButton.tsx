import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  floating?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hi, I'm interested in this shop listing.",
  className = "",
  floating = false,
}) => {
  const handleWhatsAppClick = () => {
    // Format phone number: remove all non-digits and ensure it starts with country code
    let formattedNumber = phoneNumber.replace(/\D/g, "");
    
    // If number doesn't start with country code (91 for India), prepend it
    if (!formattedNumber.startsWith("91") && formattedNumber.length === 10) {
      formattedNumber = "91" + formattedNumber;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (floating) {
    return (
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
        title="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute bottom-full mb-3 px-3 py-2 bg-[#25D366] text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${className}`}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span>Chat on WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
