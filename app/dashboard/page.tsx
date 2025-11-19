"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import DashboardHeader from "@/app/components/organisms/DashboardHeader";
import StatCard from "@/app/components/organisms/StatCard";

export default function DashboardPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);

  // Fetch authenticated user
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me");

        if (!res.ok) {
          router.push("/login");
          return;
        }

        const data = await res.json();
        setUser(data.user);
      } catch {
        router.push("/login");
      }
    }

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) router.push("/login");
    } catch {
      console.error("Logout error");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8 relative">
      
      {/* Header (Organism) */}
      <DashboardHeader user={user} onLogoutClick={() => setShowModal(true)} />

      <p className="text-gray-700 mt-6">Here’s your nutrition summary.</p>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Calories Today" value="1,860 kcal" />
        <StatCard title="Protein Intake" value="92g" />
        <StatCard title="Water" value="1.5L" />
      </div>

      {/* Logout Modal */}
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fadeIn">
    <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center animate-scaleIn">
      <h2 className="text-xl font-semibold text-gray-800">Confirm Logout</h2>
      <p className="text-gray-600 mt-2">Are you sure you want to logout?</p>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>

        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition disabled:opacity-50"
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  </div>
)}


    </main>
  );
}
