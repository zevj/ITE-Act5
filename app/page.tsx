import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-extrabold text-green-600 mb-4">NutriTrack</h1>
      <p className="text-lg text-gray-700 mb-8">
        Your personal nutrition tracker to help you eat smarter and live healthier.
      </p>
      <Link
        href="/login"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Get Started
      </Link>
    </main>
  );
}
