import img from '../assets/WhatsApp Image 2025-03-29 at 10.24.17 AM.jpeg'

export default function CreatorSection() {
  return (
    <section id='Creator' className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
          Meet the Creator
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          The mind behind CureConnect – working to solve real problems through code and compassion.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-8 max-w-md mx-auto hover:shadow-xl transition">
          <img
            src={img} // Replace with your image URL
            alt="Tushar Garg"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Tushar Garg</h3>
          <p className="text-green-600 mb-2">Full Stack Developer</p>
          <p className="text-gray-600 text-sm">
            A final year BCA student with a passion for building impactful solutions. CureConnect is a step towards making healthcare more accessible.
          </p>
        </div>
      </div>
    </section>
  );
}
