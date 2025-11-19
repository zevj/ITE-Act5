// app/components/organisms/LoginForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthRequest } from "@/hooks/useAuthRequest";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import AuthHeader from "../molecules/AuthHeader";

export default function LoginForm() {
  const router = useRouter();
  const { login, loading, error } = useAuthRequest();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await login(email, password);
    if (res) router.push("/dashboard");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
    >
      <AuthHeader />

      <Input
        label="Email"
        type="email"
        placeholder="Domain Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <Button text={loading ? "Logging in..." : "Login"} disabled={loading} />
    </form>
  );
}
