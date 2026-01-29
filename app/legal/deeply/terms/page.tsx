import Link from "next/link";

export default function DeeplyTermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Deeply - Terms of Service
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using Deeply, you agree to be bound
              by these Terms of Service. If you do not agree to abide by these
              terms, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              2. Service Description
            </h2>
            <p>
              Deeply is a free mobile application provided by Lupleg Apps. The
              service is provided &quot;as-is&quot; and may be modified or
              discontinued at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              3. User Account
            </h2>
            <p>
              To use Deeply, you must create an account by providing your full
              name and email address. You are responsible for maintaining the
              confidentiality of your account and password. You agree to accept
              responsibility for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              4. User Conduct
            </h2>
            <p>You agree not to use Deeply for any purpose that is:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Illegal or in violation of any applicable laws</li>
              <li>
                Harmful, abusive, or offensive to other users or the developers
              </li>
              <li>
                Attempts to disrupt or interfere with the app&apos;s
                functionality
              </li>
              <li>
                Attempts to reverse engineer, decompile, or hack the application
              </li>
              <li>Commercial exploitation of the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              5. Intellectual Property
            </h2>
            <p>
              Deeply and all of its content, features, and functionality
              (including but not limited to all information, software, text,
              displays, images, video, and audio) are owned by Lupleg Apps or
              its content suppliers and are protected by copyright and other
              intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              6. Disclaimer
            </h2>
            <p>
              Deeply is provided on an &quot;as-is&quot; basis. Lupleg Apps
              makes no warranties, expressed or implied, regarding the app or
              its operation. We disclaim all warranties including, without
              limitation, warranties of merchantability, fitness for a
              particular purpose, and non-infringement of intellectual property
              rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              In no event shall Lupleg Apps, its founders, or its suppliers be
              liable for any damages (including loss of data, profits, or
              business interruption) arising from the use of or inability to use
              Deeply, even if we have been notified of the possibility of such
              damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              8. Modifications to Terms
            </h2>
            <p>
              Lupleg Apps may revise these Terms of Service at any time without
              notice. By continuing to use Deeply after such revisions, you
              agree to be bound by the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              9. Termination
            </h2>
            <p>
              Lupleg Apps may terminate or suspend your account and access to
              Deeply at any time for violations of these Terms of Service or for
              any other reason, with or without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us through the app or via email.
            </p>
          </section>

          <section>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
