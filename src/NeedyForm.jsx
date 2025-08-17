import { useEffect, useRef, useState } from "react";
import { FaUpload } from "react-icons/fa6";
import { TailSpin } from 'react-loader-spinner';

import axios from'../axiosInstance';
const token=localStorage.getItem('token');



export default function NeedyForm() {
  console.log("local storage:",token);
  let saveRef=useRef();
  let updateRef=useRef();
 
  useEffect(()=>{
    (async()=>{
      let url='/needy/tokenDecode'
      let resp = await axios.post(url,{},{
        headers:{'Authorization':`Bearer ${token}`}
      })
      if(resp.data.status==true){
        console.log(resp.data.obj)
        if(resp.data.obj.length>0){
          alert(JSON.stringify(resp.data.obj));
          let newdob=new Date(resp.data.obj[0].dob).toISOString().split('T')[0];
          // setFormData({...formData,emailid:resp.data.email})
          console.log(newdob);
          setFormData({...resp.data.obj[0],emailid:resp.data.email,dob:newdob});
          saveRef.current.disabled=true;
          updateRef.current.disabled=false;
        }else {;
          console.log(resp.data.email);
          setFormData({...formData,emailid:resp.data.email})
          saveRef.current.disabled=false;
          updateRef.current.disabled=true;
          alert('please save your details')
        }
      }else alert(JSON.stringify(resp.data.error));
    })()
  },[])


  const [formData, setFormData] = useState({
    emailid: "",
    contact: "",
    name: "",
    dob: "",
    gender: "",
    address: "",
    frontImage: null,
    backImage: null,
  });
  const[isLoading,setLoading]=useState(false);
  const [err,setErr]=useState('');

  const [frontPreview, setFrontPreview] = useState(null);
  const [backPreview, setBackPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const  handleFileChange = async(e, side) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    let fd=new FormData();
    if (side === "front") {
      setFormData((prev) => ({ ...prev, frontImage: file }));
      setFrontPreview(url);
      fd.append('frontImage',file);
    
    } else {
      setFormData((prev) => ({ ...prev, backImage: file }));
      setBackPreview(url);
      fd.append('backImage',file);
    }
    try{
      setLoading(true);
       
      let url='/needy/extract'
      let resp=await axios.post(url,fd,{headers:{'Authorization':`Bearer ${token}`,'Content-Type': 'multipart/form-data'}});
      if(resp.data.status==true){
        // alert(JSON.stringify(resp.data.msg));
        if(side=='front'){
           let {name,gender,dob}=resp.data.obj;
           setFormData((prev)=>({...prev,name,gender,dob}))
        }else {
          let {address}=resp.data.obj;
          alert(JSON.stringify(address));
           setFormData((prev)=>({...prev,address}))
        }
        
      }else alert(JSON.stringify(resp.data.error));
    
  }finally{
    setLoading(false);
  }
  

  };

  const handleSubmit = async () => {
    setErr("");
    let EmailRegex = /^\S+@\S+\.\S+$/;
    let checkFeilds=Object.values(formData).some((val)=>val==""||val==null)
   
    if(checkFeilds){
      setErr("All Feilds Are Required");
      return;
    }else if( !EmailRegex.test(formData.emailid)){
        setErr("please enter valid email address");
        return;
    }else if(formData.contact.length!=10){
      setErr("please enter valid contact number,it must have 10 digits");
      return;
    }else setErr("");

     let url='/needy/save'
      let resp=await axios.post(url,formData);
      if(resp.data.status==true){
        alert('details saved successfully');
      }else alert(JSON.stringify(resp.data.error));
  };

  let update=async()=>{
   let resp= await axios.post('/needy/update',formData) ; 
   if(resp.data.status==true){
    alert('user updated successfully!');
   } else alert(JSON.stringify(resp.data.error));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400 flex items-center justify-center px-4 py-10 animate-fadeIn">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Needy Profile</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium">Email ID</label>
            <input
              type="email"
              required
              name="emailid"
              value={formData.emailid}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="you@example.com"
            />

            <label className="block mt-4 text-gray-700 font-medium">Contact Number</label>
            <input
              type="text"
              required
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="Contact Number"
            />

            <div className="mt-6 border rounded-xl p-4 bg-blue-50 ">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Upload Front of Adhaar Card</h4>
              <input
              required
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "front")}
                className="mb-2"
              />
              {frontPreview && (
                <img src={frontPreview} alt="Front Preview" className="h-28 rounded-lg" />
              )}
             

              <label className="block mt-3 text-gray-700">Name</label>
              <input
                readOnly
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              />

              <label className="block mt-3 text-gray-700">DOB</label>
              <input
               readOnly
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              />

              <label className="block mt-3 text-gray-700">Gender</label>
              <input
               readOnly
                name="gender"
                type="text"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              />
               
            </div>
            <p className="text-red-700 text-sm mt-5">{err}</p>
          </div>

          <div className="mt-6 md:mt-0 border rounded-xl p-4 bg-blue-50">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Upload Back Side</h4>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "back")}
              className="mb-2"
            />
            {backPreview && (
              <img src={backPreview} alt="Back Preview" className="h-28 rounded-lg" />
            )}

            <label className="block mt-3 text-gray-700">Address</label>
            <textarea
              readOnly
              name="address"
              rows="5"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              placeholder="Full Address"
            ></textarea>
            {
                isLoading && (
                  
                  <div className="text-blue-500 text-sm mt-7 flex gap-2"><TailSpin 
                   height="40"
                   width="40"
                   color="blue"
                   ariaLabel="extracting data..."
                  ></TailSpin>
                  <span>extracting data...</span>
                  </div>
                  
                  
                )
              }
          </div>
           
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={handleSubmit} ref={saveRef}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-300"
          >
            Send to Server
          </button>
          <button ref={updateRef} onClick={update} className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-300">
            Modify
          </button>
        </div>
      </div>
    </div>
  );
}
