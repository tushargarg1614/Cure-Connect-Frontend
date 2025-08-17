import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion' 
import axios from '../axiosInstance'

export default function LoginForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let resp=await axios.post('/user/userLogin',formData);
    console.log(resp.data.status)
    if (resp.data.status==true){
      
      localStorage.setItem('token',resp.data.token);
      localStorage.setItem('activeUser',resp.data.obj.email);
      localStorage.setItem('activeUserRole',resp.data.obj.userType);
   
       
      
      if(resp.data.obj.userType==="needy"){
        
       await navigate('/needy');
       window.location.reload();
        // alert('you are logged in successfully')
        }else if(resp.data.obj.userType==='donor'){
          navigate('/donor');
          window.location.reload();
        } else {
           navigate('/admin');
          window.location.reload();
        }
    }else alert(JSON.stringify(resp.data.error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
     <motion.div
      initial={{ opacity: 0, y: -50 }}    
        animate={{ opacity: 1, y: 0 }}       
        transition={{ duration: 0.6, ease: "easeOut" }}  
       className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-700 mb-6">
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

        

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
