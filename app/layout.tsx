// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

const PIXEL_ID = "9e96b458-a285-490d-9d76-eb701b8c9078";

export const metadata: Metadata = {
  title: "Earn Gift Cards with Swagbucks",
  description: "Start earning rewards today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* …other tags… */}

        {/* 1) Load Snap Pixel library */}
        <Script
          src="https://sc-static.net/scevent.min.js"
          strategy="afterInteractive"
          id="snap-pixel-lib"
        />

        {/* 2) Init your Pixel + fire PAGE_VIEW */}
        <Script id="snap-pixel-init" strategy="afterInteractive">
          {`
            window.snaptr = window.snaptr || function() {
              (window.snaptr.q = window.snaptr.q || []).push(arguments)
            };
            snaptr('init', '${PIXEL_ID}', {
              // If you have the user’s email at build time, interpolate here.
              // Otherwise omit or pass empty string.
              'user_email': '' 
            });
            snaptr('track', 'PAGE_VIEW');
          `}
        </Script>
      </head>
      <body>
        {/* … */}
        {children}
      </body>
    </html>
  );
}
