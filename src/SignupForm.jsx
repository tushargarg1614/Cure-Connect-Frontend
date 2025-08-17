import { useState } from "react";
import axios from '../axiosInstance';
import {motion} from 'framer-motion'


export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "needy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
     console.log();
    let resp=await axios.post('/user/userSignup',formData);
    if (resp.data.status==true){
      alert('You have signedup successfully! please login to continue !');
    }else alert(JSON.stringify(resp.data.error));
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-green-300 to-blue-400 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <motion.div 
      initial={{ opacity: 0, y: -50 }}    
        animate={{ opacity: 1, y: 0 }}       
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="bg-white w-full sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center text-green-700 mb-6">
          Cure Connect
       </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-800 font-medium">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-800 font-medium">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-800 font-medium">User Type</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="needy">Needy</option>
              <option value="donor">Donor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
}
