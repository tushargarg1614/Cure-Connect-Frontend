import { useEffect, useRef, useState } from "react";
import { FaPills, FaClinicMedical } from "react-icons/fa";
import axios from '../axiosInstance';
import { useLocation } from "react-router-dom";

export default function MediAvailForm() {
  let activeEmail=localStorage.getItem('activeUser');
  const [formData, setFormData] = useState({
    email: activeEmail,
    medicine: "",
    company: "",
    expiry: "",
    packing: "",
    qty: "",
    info: "",
  });
  let location = useLocation();
  let updateRef=useRef();
  let saveRef=useRef();

  useEffect(()=>{
    if(location.state&&location.state.medData){
      let med=location.state.medData;
      let expiry=new Date(location.state.medData.expiry).toISOString().split('T')[0];
      console.log(expiry);
      setFormData({...med,expiry:expiry});
      saveRef.current.hidden=true;
    }else{
      saveRef.current.hidden=false;
      return;
    } 
      
  },[location])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const updateMed=async()=>{
    let resp=await axios.post('/donor/updateMed',formData);
    if(resp.data.status==true){
      alert('medicine updated successfully!');
      setFormData(resp.data.obj);
    }else alert(JSON.stringify(resp.data))

  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    let url ='http://localhost:2007/donor/availMed'
     let resp=await axios.post(url,formData);
     if(resp.data.status==true){
        alert(JSON.stringify(resp.data.msg));
     }else alert(JSON.stringify(resp.data.error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-300 to-blue-400 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-4xl border border-green-200 transition-all duration-300 hover:shadow-green-300">
        <div className="flex items-center gap-3 mb-8">
          <FaClinicMedical className="text-4xl text-green-700 animate-pulse" />
          <h2 className="text-3xl font-extrabold text-green-700">
            Avail Medicine
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={activeEmail}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="example@domain.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Medicine Name</label>
            <input
              type="text"
              name="medicine"
              value={formData.medicine}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Expiry Date</label>
            <input
              type="date"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Packing Type</label>
            <select
              name="packing"
              value={formData.packing}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select packing</option>
              <option value="Blister">Blister</option>
              <option value="Bottle">Bottle</option>
              <option value="Strip">Strip</option>
              <option value="Box">Box</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Quantity</label>
            <input
              type="number"
              name="qty"
              value={formData.qty}
              onChange={handleChange}
              min="1"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium text-gray-800">Additional Information</label>
            <textarea
              name="info"
              value={formData.info}
              onChange={handleChange}
              rows="3"
              placeholder="Any specific details..."
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <button
              type="submit"
              ref={saveRef}
              className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Avail To Public
            </button>
            <button
              type="button"
              onClick={updateMed}
              ref={updateRef}
              className="w-full sm:w-auto px-6 py-2 bg-white border border-green-400 text-green-700 hover:bg-green-50 font-semibold rounded-lg shadow-sm transition duration-300"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
