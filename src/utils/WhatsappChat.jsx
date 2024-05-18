import React from "react";

const WhatsAppChatButton = () => {
  // Replace '1234567890' with the actual phone number you want to open the chat with.
  const phoneNumber = "+94 076 348 4719";

  // Construct the WhatsApp chat link.
  const whatsappChatLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <a href={whatsappChatLink} target="_blank" rel="noopener noreferrer">
      <button className="bg-yellow w-full text-white p-3 text-xl rounded-full">
        Send documents
      </button>
    </a>
  );
};

export default WhatsAppChatButton;
