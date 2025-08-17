import { FaClipboardCheck, FaHeart, FaTruck } from "react-icons/fa";
import { Card } from "./Card";

export default function HowItWorks() {
  return (
    <section id="process" className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-green-600 font-bold mb-4">How CureConnect Works</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Just a few simple steps to donate unused medicines and make a real difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {
            <>
            <Card title={"submit details"} description={"Fill a quick form with your medicine details and upload a photo."} icon={<FaClipboardCheck className="h-8 w-8" />} ></Card>

            <Card title={"verification"} description={"Our team checks expiry and condition to ensure safety."} icon={<FaHeart className="h-8 w-8" />} ></Card>

            <Card title={"distributed"} description={"Medicines are handed to verified NGOs & people in need."} icon={<FaTruck className="h-8 w-8" />} ></Card>
            </>
          }
        </div> 
      </div>
    </section>
  );
}
