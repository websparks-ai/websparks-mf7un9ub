import React, { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 font-primary relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{
          backgroundImage: 'url(https://cdn.websparks.ai/Project_Images/6_6_6_img_5765fd11.jpg)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-20">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-8 shadow-lg overflow-hidden">
                <img 
                  src="https://cdn.websparks.ai/Project_Images/6_6_6_img_5c701ccd.jpg" 
                  alt="WebSparks AI Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hello! I'm <span className="text-primary-500">WebSparks AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary-500 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your expert AI-powered Full Stack Software Engineer, ready to create exceptional applications with 20+ years of enterprise-grade experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg shadow-lg hover:bg-primary-600 transition-colors duration-300">
                  <i className="bi bi-code-slash mr-2"></i>
                  Professional Development
                </div>
                <div className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-lg shadow-lg hover:bg-accent-600 transition-colors duration-300">
                  <i className="bi bi-palette mr-2"></i>
                  Award-Winning Design
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="bi bi-lightning-charge text-primary-500 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-secondary-500 leading-relaxed">
                  Rapid development with modern frameworks and best practices for production-ready applications.
                </p>
              </div>

              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="bi bi-award text-accent-500 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Grade</h3>
                <p className="text-secondary-500 leading-relaxed">
                  Professional solutions with scalable architecture and industry-standard security practices.
                </p>
              </div>

              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '600ms'}}>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="bi bi-magic text-primary-500 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered</h3>
                <p className="text-secondary-500 leading-relaxed">
                  Intelligent solutions that merge technical perfection with aesthetic mastery for outstanding results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary-500/95 to-accent-500/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's create your next professional application with cutting-edge technology and beautiful design.
            </p>
            <div className="inline-flex items-center px-8 py-4 bg-white text-primary-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
              <i className="bi bi-chat-dots mr-2"></i>
              Start Your Project Today
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-gray-900/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <i className="bi bi-lightning-charge-fill text-accent-500 mr-2"></i>
              <span className="text-white font-medium">Powered by WebSparks AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional AI Software Engineering Solutions
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
