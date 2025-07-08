import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-editor-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-editor-accent/5 via-transparent to-roles-ai/5"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(31, 111, 235, 0.3) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-editor-accent to-roles-ai rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-editor-text font-bold text-xl">Velonus</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/demo" className="text-editor-textSecondary hover:text-editor-text transition-colors">
              Demo
            </Link>
            <Link href="/editor" className="text-editor-textSecondary hover:text-editor-text transition-colors">
              Editor
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-editor-accent/10 border border-editor-accent/20 text-editor-accent text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-editor-accent rounded-full animate-pulse"></div>
            Now in Beta • Real-time Collaboration
          </div>
          
          <h1 className="text-7xl font-bold text-editor-text mb-8 tracking-tight">
            Code Together,
            <br />
            <span className="bg-gradient-to-r from-editor-accent to-roles-ai bg-clip-text text-transparent">
              Think Together
            </span>
          </h1>
          
          <p className="text-xl text-editor-textSecondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional real-time collaborative coding platform with AI-powered assistance, 
            role-based pair programming, and enterprise-grade conflict resolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/editor"
              className="group px-8 py-4 bg-gradient-to-r from-editor-accent to-editor-accent/90 text-white rounded-xl font-semibold shadow-2xl hover:shadow-editor-accent/25 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-editor-accent focus:ring-opacity-50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Start Coding
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 border border-editor-border text-editor-text rounded-xl font-semibold backdrop-blur-sm bg-editor-bgSecondary/50 hover:bg-editor-bgSecondary/80 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-editor-accent focus:ring-opacity-30"
            >
              Watch Demo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-editor-textSecondary text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-editor-success rounded-full"></div>
              Enterprise Ready
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-editor-success rounded-full"></div>
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-editor-success rounded-full"></div>
              99.9% Uptime
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="group bg-editor-bgSecondary/50 backdrop-blur-sm border border-editor-border/50 p-8 rounded-2xl hover:border-editor-accent/30 transition-all duration-300 hover:bg-editor-bgSecondary/70">
            <div className="w-14 h-14 bg-gradient-to-br from-editor-accent/20 to-editor-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-editor-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-editor-text mb-4">
              Lightning-Fast Sync
            </h3>
            <p className="text-editor-textSecondary leading-relaxed">
              Experience real-time collaboration with CRDT-based conflict resolution. 
              Zero-latency editing with operational transforms.
            </p>
          </div>

          <div className="group bg-editor-bgSecondary/50 backdrop-blur-sm border border-editor-border/50 p-8 rounded-2xl hover:border-roles-navigator/30 transition-all duration-300 hover:bg-editor-bgSecondary/70">
            <div className="w-14 h-14 bg-gradient-to-br from-roles-navigator/20 to-roles-navigator/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-roles-navigator" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-editor-text mb-4">
              Smart Role System
            </h3>
            <p className="text-editor-textSecondary leading-relaxed">
              Driver, Navigator, Observer, and AI Assistant roles with granular permissions. 
              Perfect for pair programming and code reviews.
            </p>
          </div>

          <div className="group bg-editor-bgSecondary/50 backdrop-blur-sm border border-editor-border/50 p-8 rounded-2xl hover:border-roles-ai/30 transition-all duration-300 hover:bg-editor-bgSecondary/70">
            <div className="w-14 h-14 bg-gradient-to-br from-roles-ai/20 to-roles-ai/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-roles-ai" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-editor-text mb-4">
              AI-Powered Intelligence
            </h3>
            <p className="text-editor-textSecondary leading-relaxed">
              GPT-4o integration for code explanations, refactoring suggestions, 
              and intelligent auto-completion.
            </p>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="bg-gradient-to-r from-editor-bgSecondary/30 to-editor-bgSecondary/10 backdrop-blur-sm border border-editor-border/30 rounded-3xl p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-editor-text mb-6">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-editor-textSecondary max-w-3xl mx-auto">
              Built for teams that demand reliability, security, and performance at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-editor-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-editor-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-editor-text mb-2">SOC 2 Security</h4>
              <p className="text-sm text-editor-textSecondary">End-to-end encryption with enterprise compliance</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-roles-navigator/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-roles-navigator" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-editor-text mb-2">Version History</h4>
              <p className="text-sm text-editor-textSecondary">AI-powered version summaries and branching</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-roles-ai/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-roles-ai" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h6a2 2 0 002-2V8M7 8h10M10 12h4" />
                </svg>
              </div>
              <h4 className="font-semibold text-editor-text mb-2">Session Playback</h4>
              <p className="text-sm text-editor-textSecondary">Timeline rewind and collaboration analytics</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-editor-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-editor-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-editor-text mb-2">99.9% Uptime</h4>
              <p className="text-sm text-editor-textSecondary">Global CDN with automatic failover</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-editor-text mb-8">
            Built with Modern Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Next.js 14', color: 'from-gray-600 to-gray-700' },
              { name: 'Monaco Editor', color: 'from-blue-600 to-blue-700' },
              { name: 'Yjs CRDT', color: 'from-green-600 to-green-700' },
              { name: 'TypeScript', color: 'from-blue-500 to-blue-600' },
              { name: 'WebSockets', color: 'from-purple-600 to-purple-700' },
              { name: 'OpenAI GPT-4', color: 'from-emerald-600 to-emerald-700' }
            ].map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-xl text-sm font-medium shadow-lg hover:scale-105 transition-transform`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 