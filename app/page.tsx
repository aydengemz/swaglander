'use client'

import React from 'react'
import Image from 'next/image'

export default function Home() {
  const handleClick = () => {
    const redirectUrl =
      'https://glstrck.com/aff_c?offer_id=1897&aff_id=11848'

    // 1) Fire the SIGN_UP event immediately
    // @ts-expect-error — snaptr is injected via layout.tsx
    window.snaptr('track', 'SIGN_UP')

    // 2) After a brief pause, navigate away so the Pixel request can complete
    setTimeout(() => {
      window.location.href = redirectUrl
    }, 200) // 200 ms is usually enough; bump up if you see misses
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
        Earn Online
      </h1>

      <p className="description mt-2">
        Sign up to earn points by answering surveys, watching videos, and
        shopping online.
      </p>

      <button
        onClick={handleClick}
        className="cta inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded shadow hover:bg-blue-700 transition"
      >
        Start Earning Now →
      </button>
    </main>
  )
}
