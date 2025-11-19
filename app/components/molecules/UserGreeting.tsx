// app/components/molecules/UserGreeting.tsx
"use client";

export default function UserGreeting({ name, email }: { name?: string; email?: string }) {
  return (
    <p className="text-gray-600">
      Welcome,{" "}
      <span className="font-semibold text-green-700">
        {name || email}
      </span>
    </p>
  );
}
