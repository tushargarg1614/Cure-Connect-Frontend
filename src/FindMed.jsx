import React, { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { FaSearch, FaCapsules, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

export default function FindMed() {
  const [city, setCity] = useState("");
  const [medName, setMedName] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [selectedDonor, setSelectedDonor] = useState(null);

  useEffect(()=>{
    (async()=>{
        let res=await axios.get("/needy/getMeds");
        setMedicines(res.data);
    })()
  },[])

  const handleSearch = async () => {
    try {
      const res = await axios.get("/needy/find-meds", {
        params: { city, medName },
      });
      setMedicines(res.data);
    } catch (err) {
      console.error("Error fetching meds", err);
      alert("Error fetching data.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br capitalize from-green-300 to-blue-400 p-4 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-4 flex items-center justify-center gap-2">
          <FaSearch className="text-green-600" /> Find Medicine
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Enter Medicine Name"
            value={medName}
            onChange={(e) => setMedName(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FaSearch /> Search
          </button>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {medicines.length>0?
         medicines.map((med, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
              <FaCapsules className="text-green-600" /> {med.medicine}
            </h3>
            <p className="text-gray-700 text-sm mt-1">
              <strong>Company:</strong> {med.company}
            </p>
            <p className="text-gray-700 mt-1 text-sm flex items-center gap-2">
              <FaCalendarAlt /><b> expiring by:</b> {new Date(med.expiry).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mt-1 flex items-center gap-2">
              <FaMapMarkerAlt /> {med.donorInfo.curcity}
            </p>
            <p className="text-gray-900 text-xs mt-1 flex items-center gap-2">
              <b>note:</b> {med.info}
            </p>
            <button
              onClick={() => setSelectedDonor(med.donorInfo)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaInfoCircle /> More Details
            </button>
          </div>
        )):
        <p className="m-auto text-3xl text-gray-100 text-center mt-10"><h1>medicine not found!</h1></p>}
      </div>

      
      {selectedDonor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-gradient-to-br from-green-300 to-blue-400 p-6 rounded-xl shadow-xl max-w-md w-full relative">
            <h3 className="text-xl font-bold text-green-900 mb-4">Donor Details</h3>
            <p className=""><strong>Name:</strong> {selectedDonor.name}</p>
            <p className=""><strong>Email:</strong> {selectedDonor.email}</p>
            <p className=""><strong>Phone:</strong> {selectedDonor.contact}</p>
            <p className=""><strong>Address:</strong> {selectedDonor.curaddress}</p>
            <button
              onClick={() => setSelectedDonor(null)}
              className="absolute top-2 right-3 text-red-500 font-bold text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
