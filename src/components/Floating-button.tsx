"use client";

import React, { useState } from "react";

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMainButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleActionClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <div 
      className="fixed bottom-8 right-8 z-50 flex flex-col-reverse items-center gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Social Media Buttons - appear above when open */}
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2">
          {/* Email Button */}
          <button 
            className="btn btn-circle btn-lg btn-primary relative overflow-hidden hover:scale-110 transition-transform duration-200"
            onClick={(e) => handleActionClick("mailto:your-email@example.com", e)}
          >
            <svg
              aria-label="Send Email"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M1.75 2A1.75 1.75 0 0 0 0 3.75v.736a.75.75 0 0 0 .284.56l.736.65a.75.75 0 0 0 .38.154h11.5a.75.75 0 0 0 .38-.154l.736-.65a.75.75 0 0 0 .284-.56V3.75A1.75 1.75 0 0 0 14.25 2H1.75ZM0 6.25v6.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 16 12.75v-6.5a.75.75 0 0 0-.284-.56l-.736-.65a.75.75 0 0 0-.38-.154H1.4a.75.75 0 0 0-.38.154l-.736.65A.75.75 0 0 0 0 6.25Zm3.235 1.309a.75.75 0 0 0-.97 1.148L5.97 11.03a.75.75 0 0 0 1.06 0l3.735-3.735a.75.75 0 1 0-1.06-1.06L6.5 9.439 4.265 7.205a.75.75 0 0 0-.53-.22.75.75 0 0 0-.5.184Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* LinkedIn Button */}
          <button 
            className="btn btn-circle btn-lg btn-primary relative overflow-hidden hover:scale-110 transition-transform duration-200"
            onClick={(e) => handleActionClick("https://linkedin.com/in/your-profile", e)}
          >
            <svg
              aria-label="LinkedIn Profile"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6"
            >
              <path
                d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
              />
            </svg>
          </button>

          {/* WhatsApp Button */}
          <button 
            className="btn btn-circle btn-lg btn-primary relative overflow-hidden hover:scale-110 transition-transform duration-200"
            onClick={(e) => handleActionClick("https://wa.me/your-number", e)}
          >
            <svg
              aria-label="WhatsApp"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm-.655 7.236a.5.5 0 0 1-.707.707l-.707-.707a.5.5 0 1 1 .707-.707l.707.707Zm2.829.707a.5.5 0 0 1-.707-.707l.707-.707a.5.5 0 1 1 .707.707l-.707.707ZM8 6.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V7a.5.5 0 0 0-.5-.5Z"
                clipRule="evenodd"
              />
              <path
                d="M6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Main Toggle Button */}
      <button 
        className="btn btn-circle btn-lg btn-primary shadow-lg hover:shadow-xl transition-all duration-200"
        onClick={handleMainButtonClick}
        style={{ zIndex: 100 }}
      >
        <svg
          aria-label={isOpen ? "Close" : "Open"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-6 transition-transform duration-300"
        >
          {isOpen ? (
            // X icon
            <path
              fillRule="evenodd"
              d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"
              clipRule="evenodd"
            />
          ) : (
            // Plus icon
            <path
              d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
            />
          )}
        </svg>
      </button>
    </div>
  );
}