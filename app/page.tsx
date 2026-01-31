interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  links: {
    terms: string;
    privacy: string;
  };
}

const apps: App[] = [
  {
    id: "deeply",
    name: "Deeply",
    description:
      "A powerful productivity app that helps you stay focused and organize your tasks efficiently.",
    category: "Productivity",
    icon: "🎯",
    links: {
      terms: "/legal/deeply/terms",
      privacy: "/legal/deeply/privacy",
    },
  },
  {
    id: "app2",
    name: "App 2",
    description:
      "A feature-rich application designed to simplify your daily workflow.",
    category: "Utilities",
    icon: "⚙️",
    links: {
      terms: "/legal/app2/terms",
      privacy: "/legal/app2/privacy",
    },
  },
  {
    id: "app3",
    name: "App 3",
    description:
      "Enhance your experience with innovative tools and seamless integration.",
    category: "Tools",
    icon: "🛠️",
    links: {
      terms: "/legal/app3/terms",
      privacy: "/legal/app3/privacy",
    },
  },
  {
    id: "app4",
    name: "App 4",
    description:
      "Your go-to solution for productivity and personal organization.",
    category: "Productivity",
    icon: "✨",
    links: {
      terms: "/legal/app4/terms",
      privacy: "/legal/app4/privacy",
    },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm bg-white/30 dark:bg-black/30">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-5xl md:text-6xl font-black bg-blue-700 bg-clip-text text-transparent">
                Lupleg Studios
              </h1>
            </div>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Discover our collection of innovative mobile and web applications
              designed to enhance your productivity and simplify your daily
              tasks.
            </p>
          </div>
        </div>
      </header>

      {/* Apps Section */}
      <section id="apps" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Our Premium Apps
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Crafted with precision, designed for excellence. Each app is built
            to deliver exceptional value and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group relative rounded-2xl border border-zinc-200/50 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-8 relative z-10">
                {/* Icon and category */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl">{app.icon}</div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {app.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {app.name}
                </h3>

                <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed mb-8">
                  {app.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={app.links.terms}
                    className="flex-1 px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 text-center"
                  >
                    Terms
                  </a>
                  <a
                    href={app.links.privacy}
                    className="flex-1 px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 text-center"
                  >
                    Privacy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-linear-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center">
            Why Choose Lupleg Studios?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High Performance",
                description:
                  "Lightning-fast apps optimized for speed and efficiency across all devices.",
                icon: "⚡",
              },
              {
                title: "User-Centric Design",
                description:
                  "Intuitive interfaces crafted with your experience in mind.",
                icon: "🎨",
              },
              {
                title: "Secure & Reliable",
                description:
                  "Enterprise-grade security to protect your data and privacy.",
                icon: "🔒",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-white dark:bg-zinc-800/50 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black/30 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Download one of our apps today and experience the difference that
            thoughtful design and powerful features can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
            >
              Download Now
            </a>
            <a
              href="https://www.lupleg.org"
              className="px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-blue-700 dark:text-white mb-4">
                Lupleg Studios
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Innovative applications crafted by Lupleg Studios.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-black dark:text-white mb-4">
                Product
              </h5>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="#apps"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Our Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-black dark:text-white mb-4">
                Company
              </h5>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="https://www.lupleg.org/about"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lupleg.org"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Lupleg Studios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-black dark:text-white mb-4">
                Legal
              </h5>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="/legal/deeply/privacy"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/legal/deeply/terms"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              &copy; {new Date().getFullYear()} Lupleg Studios. All rights
              reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://twitter.com"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com/Lupleg"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/marksikaundi"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
