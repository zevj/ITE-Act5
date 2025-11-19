// app/components/molecules/AuthHeader.tsx
"use client";

import Link from "next/link";

export default function AuthHeader() {
  return (
    <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
      <Link href="/" className="hover:underline">
        NutriTrack
      </Link>
    </h1>
  );
}
