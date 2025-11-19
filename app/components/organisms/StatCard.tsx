// app/components/organisms/StatCard.tsx
"use client";

export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-2xl font-bold text-green-600 mt-2">{value}</p>
    </div>
  );
}
