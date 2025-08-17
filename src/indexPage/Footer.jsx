import React from 'react'

function Footer() {
  return (
    
<footer className="bg-gradient-to-br from-green-700 to-blue-800 text-white pt-12 pb-8 px-6 sm:px-10 mt-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Left: Logo & About */}
    <div>
      <h2 className="text-2xl font-bold mb-2">CureConnect</h2>
      <p className="text-sm text-blue-100">
        A community-driven platform to donate unused medicines to those in need. Every pill counts.
      </p>
    </div>

    {/* Middle: Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-blue-100 text-sm">
        <li><a href="#process" className="hover:text-white">How it Works</a></li>
        <li><a href="#whyUs" className="hover:text-white">Why Choose Us</a></li>
        <li><a href="#Creator" className="hover:text-white">Meet Creator</a></li>
        <li><a href="#Contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Right: Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <p className="text-sm text-blue-100">Email: <a href="mailto:tushargarg50797@gmail.com" className="underline">tushargarg50797.com</a></p>
      <p className="text-sm text-blue-100">Location: Bathinda, Punjab</p>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="mt-10 border-t border-blue-400/40 pt-4 text-center text-sm text-blue-200">
    © {new Date().getFullYear()} CureConnect. All rights reserved.
  </div>
</footer>

  )
}

export default Footer