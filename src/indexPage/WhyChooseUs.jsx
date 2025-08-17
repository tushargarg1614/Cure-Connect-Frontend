import { FaShieldAlt, FaRecycle, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section id="whyUs" className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f766e] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CureConnect?</h2>
        <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
          Here's why thousands trust us to connect unused medicines with those in need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 rounded-2xl bg-white/10  backdrop-blur-sm shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <FaShieldAlt className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified & Safe</h3>
            <p className="text-blue-100">We strictly verify expiry & condition before passing medicines to NGOs.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <FaRecycle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Impact</h3>
            <p className="text-blue-100">Reduce waste and help lives — every pill counts.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <FaUsers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-blue-100">Built by volunteers, powered by people. You're part of the mission.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
