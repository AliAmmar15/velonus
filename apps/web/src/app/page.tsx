import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-glass-bg relative overflow-x-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-glass-accent-primary/5 via-transparent to-glass-accent-secondary/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-glass-accent-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-glass-accent-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 glass-surface border-b border-glass-border backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-glass-accent-primary to-glass-accent-secondary rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-glass-text font-semibold text-xl">Velonus</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/demo" className="text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm font-medium">
              Demo
            </Link>
            <Link href="/pricing" className="text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="/docs" className="text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm font-medium">
              Documentation
            </Link>
            <Link href="/editor" className="glass-button-primary px-4 py-2 rounded-lg text-sm font-medium">
              Launch Editor
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg glass-surface border border-glass-border text-glass-accent-primary text-xs font-medium mb-8 backdrop-blur-lg">
            <div className="w-1.5 h-1.5 bg-glass-accent-primary rounded-full animate-pulse"></div>
            Enterprise Beta
          </div>
          
          <h1 className="text-6xl font-bold text-glass-text mb-6 tracking-tight leading-tight">
            Professional Collaborative
            <br />
            <span className="bg-gradient-to-r from-glass-accent-primary to-glass-accent-secondary bg-clip-text text-transparent">
              Development Platform
            </span>
          </h1>
          
          <p className="text-xl text-glass-textSecondary mb-10 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade real-time collaborative coding environment with glassmorphism UI,
            advanced conflict resolution, role-based access control, and AI-powered development assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/editor"
              className="glass-button-primary px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-glass-hover"
            >
              Start Development Session
            </Link>
            <Link
              href="/demo"
              className="glass-button px-8 py-3 rounded-xl font-medium"
            >
              View Live Demo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-glass-textSecondary text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-glass-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              SOC 2 Type II Certified
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-glass-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              99.9% Service Uptime
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-glass-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Enterprise Ready
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-glass-text mb-4">
              Advanced Collaboration Features
            </h2>
            <p className="text-xl text-glass-textSecondary max-w-3xl mx-auto">
              Built for engineering teams with glassmorphism design and enterprise-grade reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-xl backdrop-blur-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-glass-accent-primary/20 to-glass-accent-secondary/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg className="w-6 h-6 text-glass-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-glass-text mb-4">
                Real-Time Synchronization
              </h3>
              <p className="text-glass-textSecondary leading-relaxed">
                CRDT-based operational transformation with glassmorphism UI ensures zero-conflict collaborative editing 
                with millisecond-level synchronization across distributed teams.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-xl backdrop-blur-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-roles-navigator/20 to-glass-accent-secondary/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg className="w-6 h-6 text-roles-navigator" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-glass-text mb-4">
                Role-Based Access Control
              </h3>
              <p className="text-glass-textSecondary leading-relaxed">
                Granular permission system with Driver, Navigator, Observer, and AI Assistant roles. 
                Perfect for structured pair programming with modern glass interface.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-xl backdrop-blur-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-roles-ai/20 to-glass-accent-primary/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg className="w-6 h-6 text-roles-ai" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-glass-text mb-4">
                AI Development Assistant
              </h3>
              <p className="text-glass-textSecondary leading-relaxed">
                Integrated GPT-4 powered code analysis with glassmorphism interface, intelligent refactoring suggestions, 
                and contextual documentation generation.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="py-20">
          <div className="glass-panel p-12 rounded-xl backdrop-blur-lg border border-glass-border">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-glass-text mb-4">
                Enterprise Security & Compliance
              </h2>
              <p className="text-xl text-glass-textSecondary max-w-3xl mx-auto">
                Meeting the highest standards with modern glassmorphism design and enterprise-grade security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-glass-accent-primary/20 to-glass-accent-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-glass-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-glass-text mb-2">End-to-End Encryption</h4>
                <p className="text-sm text-glass-textSecondary">AES-256 encryption with zero-knowledge architecture</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-glass-success/20 to-glass-accent-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-glass-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-glass-text mb-2">Audit Logging</h4>
                <p className="text-sm text-glass-textSecondary">Comprehensive session tracking and compliance reporting</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-roles-navigator/20 to-glass-accent-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-roles-navigator" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-glass-text mb-2">Session Recording</h4>
                <p className="text-sm text-glass-textSecondary">Complete development session playback and analytics</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-roles-ai/20 to-glass-accent-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-roles-ai" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-glass-text mb-2">High Availability</h4>
                <p className="text-sm text-glass-textSecondary">Global infrastructure with automatic failover</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-glass-text mb-4">
              Built on Industry Standards
            </h2>
            <p className="text-lg text-glass-textSecondary max-w-2xl mx-auto">
              Leveraging proven technologies with modern glassmorphism design for enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'TypeScript', 'Next.js', 'WebSocket', 'CRDT', 'Monaco'].map((tech) => (
              <div key={tech} className="text-center">
                <div className="glass-surface p-4 rounded-xl backdrop-blur-lg hover:bg-glass-surfaceHover transition-all duration-200 group">
                  <div className="text-glass-textSecondary group-hover:text-glass-accent-primary transition-colors duration-200 font-medium">
                    {tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="glass-panel p-12 rounded-xl backdrop-blur-lg text-center border border-glass-border">
            <h2 className="text-3xl font-bold text-glass-text mb-4">
              Ready to Transform Your Development Workflow?
            </h2>
            <p className="text-xl text-glass-textSecondary mb-8 max-w-2xl mx-auto">
              Experience the future of collaborative coding with our glassmorphism interface and enterprise-grade features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/editor"
                className="glass-button-primary px-8 py-3 rounded-xl font-medium"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="glass-button px-8 py-3 rounded-xl font-medium"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 glass-surface border-t border-glass-border backdrop-blur-lg mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-glass-accent-primary to-glass-accent-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-glass-text font-semibold text-xl">Velonus</span>
              </div>
              <p className="text-glass-textSecondary text-sm">
                Professional collaborative development platform with modern glassmorphism design.
              </p>
            </div>
            
            <div>
              <h4 className="text-glass-text font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/editor" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">Editor</Link>
                <Link href="/demo" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">Demo</Link>
                <Link href="/pricing" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">Pricing</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-glass-text font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">About</Link>
                <Link href="/careers" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">Careers</Link>
                <Link href="/contact" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-glass-text font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <Link href="/docs" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">Documentation</Link>
                <Link href="/support" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">Support</Link>
                <Link href="/privacy" className="block text-glass-textSecondary hover:text-glass-accent-primary transition-colors text-sm">Privacy</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-glass-border mt-8 pt-8 text-center">
            <p className="text-glass-textSecondary text-sm">
              © 2024 Velonus. All rights reserved. Built with glassmorphism design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 