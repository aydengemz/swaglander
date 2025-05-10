// app/layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const PIXEL_ID = '4b9cfc9c-d70e-4ded-89fe-51f54a476254'

export const metadata: Metadata = {
  title: 'Earn Gift Cards with Swagbucks',
  description: 'Start earning rewards today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* 1. Load Snap Pixel library */}
        <Script
          id="snap-pixel-lib"
          src="https://sc-static.net/scevent.min.js"
          strategy="afterInteractive"
        />

        {/* 2. Init Pixel & track PAGE_VIEW */}
        <Script id="snap-pixel-init" strategy="afterInteractive">
          {`
            window.snaptr = window.snaptr || function() {
              (window.snaptr.q = window.snaptr.q || []).push(arguments);
            };
            snaptr('init', '${PIXEL_ID}', {});
            snaptr('track', 'PAGE_VIEW');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
