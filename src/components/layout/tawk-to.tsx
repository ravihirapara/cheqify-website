"use client";

import { useEffect } from "react";

interface TawkToProps {
  enabled?: boolean;
}

export function TawkTo({ enabled = false }: TawkToProps) {
  useEffect(() => {
    if (!enabled) return;

    const propertyId = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;
    if (!propertyId) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/default`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      // Clean up Tawk.to iframe if present
      const tawkIframes = document.querySelectorAll(
        'iframe[title*="chat"]'
      );
      tawkIframes.forEach((iframe) => iframe.remove());
    };
  }, [enabled]);

  return null;
}
