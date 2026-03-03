import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF9F4] to-[#F8F6F2]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-genesis-navy mb-6">
            Demi's Design Automation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-stack Creative Director capabilities through automated design-to-code workflows
          </p>
          <button className="btn-genesis">
            Start Creating
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-genesis">
            <div className="w-16 h-16 bg-gradient-to-r from-genesis-blue to-genesis-navy rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-genesis-navy mb-3">
              Design to Code
            </h3>
            <p className="text-gray-600">
              Figma Make + Anima workflow for automated HTML, CSS, and React generation
            </p>
          </div>

          <div className="card-genesis">
            <div className="w-16 h-16 bg-gradient-to-r from-genesis-blue to-genesis-navy rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-genesis-navy mb-3">
              Component Library
            </h3>
            <p className="text-gray-600">
              Genesis Legacy AI branded components with Tailwind CSS integration
            </p>
          </div>

          <div className="card-genesis">
            <div className="w-16 h-16 bg-gradient-to-r from-genesis-blue to-genesis-navy rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-genesis-navy mb-3">
              Rapid Deployment
            </h3>
            <p className="text-gray-600">
              Vite build system with automatic Vercel deployment from GitHub
            </p>
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="card-genesis max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-genesis-navy mb-4">
            Setup Status
          </h2>
          <div className="space-y-2 text-left">
            <div className="flex items-center justify-between">
              <span>VSCode + Extensions</span>
              <span className="text-green-600 font-semibold">✅ Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Build Tools (Vite, Tailwind, TypeScript)</span>
              <span className="text-green-600 font-semibold">✅ Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Genesis Brand Integration</span>
              <span className="text-green-600 font-semibold">✅ Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Figma Configuration</span>
              <span className="text-yellow-600 font-semibold">⏳ Pending</span>
            </div>
            <div className="flex items-center justify-between">
              <span>GitHub Integration</span>
              <span className="text-yellow-600 font-semibold">⏳ Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App