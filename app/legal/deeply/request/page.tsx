"use client";

import { useState, FormEvent, ChangeEvent } from "react";

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
      setFormData(initialFormData);
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
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
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
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Request Submitted Successfully
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We have received your account deletion request. A confirmation
              email has been sent to{" "}
              <span className="font-semibold">{formData.email}</span>.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Please check your email and follow the verification link within 24
              hours to confirm the deletion of your account and associated data.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              If you don&apos;t receive the email, please check your spam folder or
              contact support.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Delete Your Account
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          We&apos;re sorry to see you go. Please note that this action is permanent
          and cannot be undone.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-red-900 mb-2">What will happen:</h2>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>Your account will be permanently deleted</li>
            <li>All associated data and content will be removed</li>
            <li>This action cannot be reversed</li>
            <li>You will no longer be able to access your account</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              disabled={loading}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              disabled={loading}
            />
            <p className="text-xs text-gray-500 mt-1">
              We require your password to confirm this request for security.
            </p>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Reason for Deletion (Optional)
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder="Please let us know why you're deleting your account..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              disabled={loading}
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="confirmation"
              name="confirmation"
              checked={formData.confirmation}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              disabled={loading}
            />
            <label
              htmlFor="confirmation"
              className="ml-3 block text-sm text-gray-700"
            >
              I understand that deleting my account is permanent and all my data
              will be permanently removed. This cannot be undone.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Request Account Deletion"}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          This request will be verified via email. You&apos;ll have 24 hours to
          confirm the deletion.
        </p>
      </div>
    </div>
  );
}
