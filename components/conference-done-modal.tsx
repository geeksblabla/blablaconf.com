"use client";

import { useState, useEffect } from "react";

export const ConferenceDoneModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true when component mounts on the client
    setIsMounted(true);

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  // Don't render anything during SSR
  if (!isMounted) return null;

  // Don't render if modal is closed
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        className="relative w-full max-w-md p-6 mx-4 bg-white rounded-lg shadow-xl md:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            BlaBlaConf is Complete!
          </h2>
          <p className="mb-6 text-gray-700">
            Thank you for your interest in BlaBlaConf! The conference has
            already taken place, but you can watch all the recorded sessions on
            our YouTube channel.
          </p>

          <div className="flex flex-col space-y-3">
            <a
              href="https://www.youtube.com/watch?v=cPOUBC4p1TQ&list=PLUa7iphNQNrxKx8FxrJTiF-FtdajPpMbz&index=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Watch Sessions on YouTube
            </a>

            <button
              onClick={closeModal}
              className="px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Continue to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
