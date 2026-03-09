import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Zap, Globe, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display font-bold text-2xl bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            PageForge
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="default">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-display font-bold tracking-tight">
            AI-Powered Landing Pages in Minutes
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Create stunning, high-converting landing pages powered by AI. No design experience needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" variant="default" className="gap-2">
                Start Creating <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="ghost">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Why Choose PageForge?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Powered Creation",
                description: "Just describe your idea and let AI build your landing page.",
              },
              {
                icon: Globe,
                title: "Custom Domain Support",
                description: "Connect your own domain and launch your page instantly.",
              },
              {
                icon: Palette,
                title: "Full Customization",
                description: "Fine-tune every detail to match your brand perfectly.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-slate-200">
                <feature.icon className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center text-white space-y-8">
          <h2 className="text-4xl font-display font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-white/90">Create your first landing page today. It takes just 2 minutes.</p>
          <Link href="/signup">
            <Button size="lg" variant="default" className="gap-2">
              Create Your First Page <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-600">
          <p>&copy; 2024 PageForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

