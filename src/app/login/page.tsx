"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    login(email, password);
    router.push("/account");
  };

  return (
    <PageLayout>
      <div className="mx-auto max-w-md px-4 py-16 md:px-6">
        <h1 className="mb-2 text-center font-display text-3xl font-bold text-brand-navy dark:text-white">
          Login
        </h1>
        <p className="mb-8 text-center text-gray-500">
          Sign in to your M.D.N Uniform account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" size="lg">
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-brand-mint hover:underline">
            Register
          </Link>
        </p>
      </div>
    </PageLayout>
  );
}
