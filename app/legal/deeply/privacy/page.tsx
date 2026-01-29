import Link from "next/link";

export default function DeeplyPrivacyPage() {
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
            Deeply - Privacy Policy
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              1. Introduction
            </h2>
            <p>
              Lupleg Studios (&quot;we&quot; or &quot;us&quot; or
              &quot;our&quot;) operates Deeply, a free mobile application (the
              &quot;App&quot;). This page informs you of our policies regarding
              the collection, use, and disclosure of personal data when you use
              our App.
            </p>
            <p className="mt-2">
              We are committed to transparency and minimal data collection. We
              only collect information that is absolutely necessary for you to
              create and maintain an account with us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              2. Information Collection and Use
            </h2>
            <p>
              Deeply is a free service. To create an account, we require the
              following information:
            </p>
            <h3 className="text-lg font-semibold text-black dark:text-white mt-4 mb-2">
              Required Account Information:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Full Name:</strong> Your complete name, required for
                account creation and identification.
              </li>
              <li>
                <strong>Email Address:</strong> Your email address, required for
                account creation, password recovery, and account management.
              </li>
            </ul>
            <p className="mt-4 font-semibold text-black dark:text-white">
              That&apos;s all we collect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              3. What We Do NOT Collect
            </h2>
            <p>Deeply does not request or access any of the following:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Device location data</li>
              <li>Contact lists or phone numbers</li>
              <li>Camera or microphone access</li>
              <li>Device identifiers or hardware information</li>
              <li>Browsing history</li>
              <li>Health or fitness data</li>
              <li>Photos, videos, or media files</li>
              <li>Payment or financial information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              4. Use of Data
            </h2>
            <p>
              Your full name and email address are used solely for the following
              purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>To create and maintain your account</li>
              <li>To allow you to log in to your account</li>
              <li>To help you recover your account if needed</li>
              <li>To send critical service notifications</li>
            </ul>
            <p className="mt-4">
              We will never use your information for marketing, advertising, or
              any third-party purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              5. Security of Data
            </h2>
            <p>
              The security of your data is important to us. We use
              industry-standard encryption and security practices to protect
              your personal information. However, please remember that no method
              of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              6. Data Retention
            </h2>
            <p>
              Your personal data is retained for as long as your account is
              active. If you delete your account, your data will be deleted
              within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              7. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information at any time. You can manage your account settings
              directly within the app or contact us for assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the date at the bottom.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              9. Children's Privacy
            </h2>
            <p>
              Deeply is not intended for children under the age of 13. We do not
              knowingly collect personal information from children under 13. If
              we become aware that a child under 13 has provided us with
              personal data, we will take steps to delete such information
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              10. Third-Party Services
            </h2>
            <p>
              Deeply does not integrate with third-party analytics services,
              advertising networks, or tracking tools. We do not share your data
              with any third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              11. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to, stored in, and processed
              in countries other than your country of residence. These countries
              may have data protection laws that differ from your home country.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or your data,
              please contact us at: support@luplegapps.com or through the
              contact form in the app.
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
