"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347032617576"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl">
        WhatsApp
      </div>
    </a>
  );
}
