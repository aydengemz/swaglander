"use client";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const handleClick = () => {
    if (typeof window !== "undefined" && "snaptr" in window) {
      // @ts-expect-error - Snap Pixel is loaded via script
      snaptr("track", "SIGN_UP");
    }

    window.location.href = "https://glstrck.com/aff_c?offer_id=1897&aff_id=11848";
  };

  return (
    <main>
      <Image
        src="/swg3.png"
        alt="Swagbucks logo"
        width={64}
        height={64}
      />

      <h1>Earn Gift Cards Online</h1>

      <p className="description">
        Sign up to earn points by answering surveys, watching videos, and shopping online.
      </p>

      <ul className="bullets">
        <li>✅ Join for free in under 60 seconds</li>
        <li>✅ Redeem points for Amazon, PayPal, and more</li>
        <li>✅ Over $900 million paid to members</li>
      </ul>

      <button className="cta" onClick={handleClick}>
        Start Earning Now →
      </button>
    </main>
  );
}
