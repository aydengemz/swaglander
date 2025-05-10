import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GTM_ID = 'GTM-PCHZKVHX'
const PIXEL_ID = '6117fbcb-85ff-49d2-87d3-d9dab789dfe8'

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
        {/*
          1) Google Tag Manager: head snippet
        */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/*
          2) Snap Pixel: load & init before hydration
        */}
        <Script
          id="snap-pixel-lib"
          src="https://sc-static.net/scevent.min.js"
          strategy="beforeInteractive"
        />
        <Script id="snap-pixel-init" strategy="beforeInteractive">
          {`
            window.snaptr = window.snaptr || function() {
              (window.snaptr.q = window.snaptr.q || []).push(arguments);
            };
            snaptr('init', '${PIXEL_ID}', {});
            snaptr('track', 'PAGE_VIEW');
          `}
        </Script>
      </head>

      <body>
        {/*
          3) Google Tag Manager: noscript fallback immediately after <body>
        */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}
