// app/components/organisms/DashboardHeader.tsx
"use client";

import UserGreeting from "../molecules/UserGreeting";

export default function DashboardHeader({ user, onLogoutClick }: any) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-green-600 mb-1">Dashboard</h1>
        <UserGreeting name={user?.name} email={user?.email} />
      </div>

      <button
        onClick={onLogoutClick}
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
