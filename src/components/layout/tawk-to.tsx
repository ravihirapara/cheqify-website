"use client";

import { useEffect, useState } from "react";

const TAWK_PROPERTY_ID = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID || "69d39833d47df61c363c4b79";
const TAWK_WIDGET_ID = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID || "1jlh8l2mi";
const STORAGE_KEY = "cheqify-cookie-consent";

export function TawkTo() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function check() {
      setEnabled(localStorage.getItem(STORAGE_KEY) === "accepted");
    }

    check();
    window.addEventListener("cookie-consent-change", check);
    return () => window.removeEventListener("cookie-consent-change", check);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      const tawkIframes = document.querySelectorAll('iframe[title*="chat"]');
      tawkIframes.forEach((iframe) => iframe.remove());
    };
  }, [enabled]);

  return null;
}
