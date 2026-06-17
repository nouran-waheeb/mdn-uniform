"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !password) {
      setError("Please fill in all fields");
      return;
    }
    register(name, email, phone, password);
    router.push("/account");
  };

  return (
    <PageLayout>
      <div className="mx-auto max-w-md px-4 py-16 md:px-6">
        <h1 className="mb-2 text-center font-display text-3xl font-bold text-brand-navy dark:text-white">
          Create Account
        </h1>
        <p className="mb-8 text-center text-gray-500">
          Register for a faster checkout experience
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Input label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="Phone" type="tel" placeholder="01XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button type="submit" className="w-full" size="lg">
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-brand-mint hover:underline">
            Login
          </Link>
        </p>
      </div>
    </PageLayout>
  );
}
