"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}

export function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // Initialize Vanta when scripts are loaded
    const initVanta = () => {
      if (window.VANTA && window.THREE && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 150.0,
          minWidth: 150.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0b1220,
          color1: 0xffd84d,
          color2: 0x000000,
        });
      }
    };

    // Check if scripts are already loaded
    if (window.VANTA && window.THREE) {
      initVanta();
    } else {
      // Poll until scripts are loaded
      const interval = setInterval(() => {
        if (window.VANTA && window.THREE) {
          initVanta();
          clearInterval(interval);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      const timeout = setTimeout(() => clearInterval(interval), 10000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
        if (vantaEffect.current) {
          vantaEffect.current.destroy?.();
          vantaEffect.current = null;
        }
      };
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy?.();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        id="three-js"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="afterInteractive"
        id="vanta-js"
        onLoad={() => {
          // Initialize after both scripts are loaded
          const checkAndInit = () => {
            if (window.VANTA && window.THREE && vantaRef.current && !vantaEffect.current) {
              vantaEffect.current = window.VANTA.BIRDS({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                backgroundColor: 0x0b1220,
                color1: 0xffd84d,
                color2: 0x000000,
              });
            } else if (vantaRef.current && !vantaEffect.current) {
              // Retry if scripts aren't loaded yet
              setTimeout(checkAndInit, 100);
            }
          };
          checkAndInit();
        }}
      />
      <div
        ref={vantaRef}
        className="fixed inset-0 -z-10"
        style={{ minHeight: "100vh" }}
        aria-hidden="true"
      />
    </>
  );
}

