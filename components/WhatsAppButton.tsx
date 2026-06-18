"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-105 transition-all">
        <FaWhatsapp
          className="text-white"
          size={34}
        />
      </div>
    </a>
  );
}
