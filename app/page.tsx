'use client'

import React from 'react'
import Image from 'next/image'

export default function Home() {
  const handleClick = () => {
    const redirectUrl =
      'https://glstrck.com/aff_c?offer_id=1897&aff_id=11848'

    // @ts-expect-error — snaptr is injected via layout.tsx
    window.snaptr('track', 'SIGN_UP')

    // 2) After a brief pause, navigate away so the Pixel request can complete
    setTimeout(() => {
      window.location.href = redirectUrl
    }, 200) // 200 ms is usually enough; bump up if you see misses
  }

  return (
    <main className="max-w-xl mx-auto p-6 text-center">
      <div className="mb-1">
        <Image
          src="/swg2.png"
          alt="Swagbucks logo"
          width={128}
          height={128}
          className="mx-auto"
        />
      </div>
      
      <h1 className="text-2xl font-bold text-[#31A0BB] mb-4 pb-4">
        JOIN OVER 4 MILLION+ USERS EARNING ON THIS APP WORLDWIDE TODAY!
      </h1>
      
      <button
        onClick={handleClick}
        className="cta inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded shadow-lg hover:bg-blue-700 transition"
      >
        Click Here to Download →
      </button>
    </main>
  )
}
