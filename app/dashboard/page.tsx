"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // ✨ Step 8: include "name" here
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  // REAL AUTH CHECK
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me", { method: "GET" });

        if (!res.ok) {
          router.push("/login");
          return;
        }

        const data = await res.json();

        // ✨ Step 8: store user data including name
        setUser(data.user);
      } catch (e) {
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
    } catch (e) {
      console.error("Logout error:", e);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8 relative">
      
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-600 mb-1">Dashboard</h1>

          {/* ✨ Step 8: Show name instead of email */}
          <p className="text-gray-600">
            Welcome,{" "}
            <span className="font-semibold text-green-700">
              {user?.name || user?.email}
            </span>
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <p className="text-gray-700 mt-6">
        Here’s your nutrition summary.
      </p>

      {/* CARDS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800">Calories Today</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">1,860 kcal</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800">Protein Intake</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">92g</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800">Water</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">1.5L</p>
        </div>
      </div>

      {/* LOGOUT MODAL */}
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

      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

    </main>
  );
}
