"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
  reason: string;
  confirmation: boolean;
}

const initialFormData: FormData = {
  email: "",
  password: "",
  reason: "",
  confirmation: false,
};

export default function AccountDeletionRequestPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setError("");
  };

  const validateForm = (): boolean => {
    if (!formData.email.trim()) {
      setError("Email address is required");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.password.trim()) {
      setError("Password is required for security verification");
      return false;
    }
    if (!formData.confirmation) {
      setError(
        "You must confirm that you understand the deletion will be permanent",
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch("/api/account/delete-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          reason: formData.reason,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit deletion request");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col">
        {/* Decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
        </div>

        <nav className="relative z-10 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm bg-white/30 dark:bg-black/30">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/legal/deeply" className="text-xl font-bold text-blue-700 dark:text-white flex items-center gap-2">
              <span>🎯</span> Deeply
            </Link>
          </div>
        </nav>

        <main className="relative z-10 flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-2xl shadow-blue-500/5">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-2xl bg-green-50 dark:bg-green-900/20 mb-6">
                <svg
                  className="h-10 w-10 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-4">Request Submitted</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                We have received your account deletion request. A confirmation
                email has been sent to{" "}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{formData.email}</span>.
              </p>
              <div className="space-y-4 text-sm text-zinc-500 dark:text-zinc-500 text-left bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                <p>• Please check your email and follow the verification link within 24 hours.</p>
                <p>• If you don&apos;t see it, check your spam folder.</p>
                <p>• Contact support if you need further assistance.</p>
              </div>
              <Link
                href="/legal/deeply"
                className="mt-8 block w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 text-center"
              >
                Return to Deeply
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <nav className="relative z-10 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm bg-white/30 dark:bg-black/30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/legal/deeply" className="text-xl font-bold text-blue-700 dark:text-white flex items-center gap-2">
            <span>🎯</span> Deeply
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="/legal/deeply/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
            <Link href="/legal/deeply/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex-1 flex items-center justify-center p-6 py-12">
        <div className="max-w-xl w-full bg-white dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 shadow-2xl shadow-blue-500/5">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-3">Delete Your Account</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              We&apos;re sorry to see you go. This action is permanent and cannot be undone.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-red-900 dark:text-red-400 mb-3 flex items-center gap-2">
              <span>⚠️</span> Important Notice
            </h2>
            <ul className="text-sm text-red-800 dark:text-red-300/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0"></span>
                Your account will be permanently deleted.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0"></span>
                All associated data and content will be removed.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0"></span>
                You will no longer be able to access your account.
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:placeholder:text-zinc-600"
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" name="password" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:placeholder:text-zinc-600"
                disabled={loading}
              />
              <p className="text-xs text-zinc-500 dark:text-zinc-500 ml-1">
                Security confirmation: Your password is required to authorize this request.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="reason" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                Reason for leaving (Optional)
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                placeholder="How can we improve Deeply?"
                rows={3}
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:placeholder:text-zinc-600 resize-none"
                disabled={loading}
              />
            </div>

            <div className="group flex items-start p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-2xl border border-zinc-100 dark:border-zinc-800 transition-colors hover:border-red-200 dark:hover:border-red-900/30">
              <div className="flex items-center h-6">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-red-600 focus:ring-red-500 border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900"
                  disabled={loading}
                />
              </div>
              <label htmlFor="confirmation" className="ml-3 block text-sm text-zinc-600 dark:text-zinc-400 cursor-pointer">
                I understand that this action is <span className="text-red-600 dark:text-red-500 font-bold underline decoration-red-600/30 underline-offset-2">permanent</span> and my data cannot be recovered.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Permanently Delete Account"
              )}
            </button>
          </form>

          <p className="text-xs text-zinc-500 dark:text-zinc-500 text-center mt-8">
            A verification link will be sent to your email. You must confirm within 24 hours to complete the deletion.
          </p>
        </div>
      </main>

      <footer className="relative z-10 border-t border-zinc-200 dark:border-zinc-800 py-8 bg-white/30 dark:bg-black/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-500">
            © {new Date().getFullYear()} Lupleg Studios. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
