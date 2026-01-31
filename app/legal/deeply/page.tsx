import Link from 'next/link';

export default function Deeply() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <main className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md bg-white/70 dark:bg-black/70 transition-all">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-black text-blue-700 dark:text-white flex items-center gap-3 group">
              <span className="group-hover:rotate-12 transition-transform duration-300">🎯</span> 
              <span className="tracking-tighter">Deeply</span>
            </Link>
            <div className="flex items-center gap-8 text-sm font-bold">
              <Link href="/legal/deeply/privacy" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">Privacy</Link>
              <Link href="/legal/deeply/terms" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">Terms</Link>
              <button className="hidden sm:block px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-32 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative p-6 rounded-[2.5rem] bg-linear-to-b from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 text-7xl shadow-2xl">
                🎯
              </div>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">Version 2.0 Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight">
            Focus on what <br />
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">matters most.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Deeply is the minimalist productivity powerhouse that helps you reclaim your focus, organize your life, and stay in the flow.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95">
              Join the Waitlist
            </button>
            <Link href="/" className="px-10 py-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95">
              Explore Apps
            </Link>
          </div>
        </section>

        {/* What is Deeply? */}
        <section className="max-w-6xl mx-auto px-6 py-32 border-t border-zinc-100 dark:border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Designed for the <br />
                <span className="text-blue-600">Deep Work</span> Era.
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Deeply isn&apos;t just another to-do list. It&apos;s a sanctuary for your attention. We built it on the core principles of focused concentration and mindful organization.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Intentionality", desc: "Every feature is designed to reduce friction and eliminate noise." },
                  { title: "Flow State", desc: "Tools optimized to help you enter and stay in your creative zone." },
                  { title: "Organization", desc: "A hierarchical system that mimics how your brain naturally works." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-none w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-tr from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-10 rotate-3"></div>
              <div className="relative grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="aspect-square rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-5xl shadow-xl transform hover:-translate-y-2 transition-transform">🧘‍♂️</div>
                  <div className="aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-5xl shadow-xl transform hover:-translate-y-2 transition-transform">📅</div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-5xl shadow-xl transform hover:-translate-y-2 transition-transform">📊</div>
                  <div className="aspect-square rounded-3xl bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-5xl shadow-xl transform hover:-translate-y-2 transition-transform">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-32 bg-linear-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Master Your Day</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Three simple steps to peak productivity.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent -translate-y-1/2"></div>
              
              {[
                { step: "01", title: "Capture", desc: "Quickly dump your thoughts and tasks as they come to you.", icon: "📥" },
                { step: "02", title: "Clarify", desc: "Organize tasks into projects and set focused priorities.", icon: "🔍" },
                { step: "03", title: "Execute", desc: "Use the focus timer to tackle your most important work.", icon: "⚡" }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-zinc-900 border-4 border-blue-50 dark:border-blue-900/30 flex items-center justify-center text-3xl shadow-xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black mb-3 text-blue-600 dark:text-blue-400 uppercase tracking-tighter">Step {item.step}</h3>
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Built for Professionals.</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">No fluff. Just the tools you need to do your best work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Focus Timer",
                description: "Built-in Pomodoro and deep work timers to keep you in the zone and prevent burnout.",
                icon: "⏱️",
                gradient: "from-blue-500/10 to-indigo-500/10"
              },
              {
                title: "Fluid Task Management",
                description: "Organize tasks with nested lists, tags, and priorities that adapt to your workflow.",
                icon: "📝",
                gradient: "from-indigo-500/10 to-purple-500/10"
              },
              {
                title: "Progress Analytics",
                description: "Visualize your productivity trends and see where your time is actually going.",
                icon: "📈",
                gradient: "from-blue-500/10 to-cyan-500/10"
              },
              {
                title: "Mindful Reminders",
                description: "Gentle nudges that respect your focus time while ensuring nothing slips through.",
                icon: "🔔",
                gradient: "from-purple-500/10 to-pink-500/10"
              },
              {
                title: "Cross-Platform Sync",
                description: "Your data is always with you, seamlessly synced across all your devices.",
                icon: "🔄",
                gradient: "from-cyan-500/10 to-blue-500/10"
              },
              {
                title: "Dark Mode Ready",
                description: "A beautiful, eye-friendly interface designed for both day and night sessions.",
                icon: "🌙",
                gradient: "from-zinc-500/10 to-black/10"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-10 bg-white dark:bg-zinc-900/50 backdrop-blur-sm rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${feature.gradient} blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Footer Section */}
        <section className="max-w-6xl mx-auto px-6 py-32 text-center border-t border-zinc-100 dark:border-zinc-900">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Transparency</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Your privacy and data security are our top priorities.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/legal/deeply/privacy" className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">🛡️</div>
              <div className="font-bold text-xl mb-2 group-hover:text-blue-600">Privacy</div>
              <p className="text-sm text-zinc-500">How we protect your data.</p>
            </Link>
            
            <Link href="/legal/deeply/terms" className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">📄</div>
              <div className="font-bold text-xl mb-2 group-hover:text-blue-600">Terms</div>
              <p className="text-sm text-zinc-500">Our service agreement.</p>
            </Link>
            
            <Link href="/legal/deeply/request" className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">📧</div>
              <div className="font-bold text-xl mb-2 group-hover:text-blue-600">Requests</div>
              <p className="text-sm text-zinc-500">Manage your personal data.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-200 dark:border-zinc-800 py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link href="/" className="text-2xl font-black text-blue-700 dark:text-white flex items-center gap-3">
                <span>🎯</span> Deeply
              </Link>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Elevating human potential through intentional design and focused productivity tools.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Product</h4>
              <ul className="space-y-4 text-zinc-500 dark:text-zinc-400">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Waitlist</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Company</h4>
              <ul className="space-y-4 text-zinc-500 dark:text-zinc-400">
                <li><a href="https://www.lupleg.org" className="hover:text-blue-600 transition-colors">About Lupleg</a></li>
                <li><a href="https://www.lupleg.org" className="hover:text-blue-600 transition-colors">Studios</a></li>
                <li><a href="https://www.lupleg.org" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Legal</h4>
              <ul className="space-y-4 text-zinc-500 dark:text-zinc-400">
                <li><Link href="/legal/deeply/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal/deeply/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                <li><Link href="/legal/deeply/request" className="hover:text-blue-600 transition-colors">Data Request</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 dark:text-zinc-500">
            <p>© {new Date().getFullYear()} Lupleg Studios. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
              <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}