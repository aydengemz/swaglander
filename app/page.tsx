'use client'

import React from 'react'
import Image from 'next/image'

export default function Home() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && 'snaptr' in window) {
      // @ts-expect-error — snaptr is injected by the <Script> in layout.tsx
      window.snaptr('track', 'SIGN_UP')
    }
    window.location.href =
      'https://glstrck.com/aff_c?offer_id=1897&aff_id=11848'
  }

  return (
    <main className="max-w-xl mx-auto p-6 text-center">
      <Image
        src="/swg3.png"
        alt="Swagbucks logo"
        width={64}
        height={64}
        className="mx-auto"
      />

      <h1 className="mt-4 text-2xl font-semibold">
        Earn Gift Cards Online
      </h1>

      <p className="description mt-2">
        Sign up to earn points by answering surveys, watching videos, and
        shopping online.
      </p>

      <ul className="bullets my-4 text-left list-disc list-inside">
        <li>✅ Join for free in under 60 seconds</li>
        <li>✅ Redeem points for Amazon, PayPal, and more</li>
        <li>✅ Over $900 million paid to members</li>
      </ul>

      <button
        onClick={handleClick}
        className="cta inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded shadow hover:bg-blue-700 transition"
      >
        Start Earning Now →
      </button>
    </main>
  )
}
