import { useState,useEffect, useRef } from 'react';
import axios from '../axiosInstance';
import baseUrl from '../url';

export default function DonorForm() {
  let saveRef=useRef();
  let updateRef=useRef();
  let activeEmail=localStorage.getItem('activeUserEmail')

  useEffect(()=>{
      (async()=>{
        let url=baseUrl +'/donor/tokenDecode'
        let resp = await axios.post(url,{})
        if(resp.data.status==true){
          console.log(resp.data.obj)
          if(resp.data.obj.length>0){
            // alert(JSON.stringify(resp.data.obj));
            setFormData({...resp.data.obj[0],email:resp.data.email});
            saveRef.current.disabled=true;
            saveRef.current.style.backgroundColor="gray"
            updateRef.current.style.backgroundColor="green"
            updateRef.current.disabled=false;
          }else {;
            console.log(resp.data.email);
            setFormData({...formData,email:resp.data.email})
            saveRef.current.disabled=false;
              saveRef.current.style.backgroundColor="green"
            updateRef.current.style.backgroundColor="gray"
            updateRef.current.disabled=true;
            alert('please save your details')
          }
        }else alert(JSON.stringify(resp.data.error));
      })()
    },[])

  const [formData, setFormData] = useState({
    email: activeEmail,
    name: '',
    age: '',
    gender: '',
    curaddress: '',
    curcity: '',
    contact: '',
    qualification: '',
    occupation: '',
    adhaarPic: null,
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
    let fd=new FormData();
    for(let key in formData ){
         fd.append(key,formData[key])
    }
    let url=baseUrl +'/donor/save';
    let resp=await axios.post(url,fd,{
        headers:{'Content-Type':'multipart/form-data'}
    })
    if(resp.data.status==true){
        alert(JSON.stringify(resp.data.msg));
    }else alert(JSON.stringify(resp.data.error));

  };
  const updateDonor=async()=>{
    let fd=new FormData();
    for(let key in formData ){
      if(formData[key]!=null){
         fd.append(key,formData[key])
      }
    }
    let url='/donor/updateDonor';
    let resp=await axios.post(url,fd,{
        headers:{'Content-Type':'multipart/form-data'}
    })
    if(resp.data.status==true){
        alert(JSON.stringify(resp.data.msg));
    }else alert(JSON.stringify(resp.data.error));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400  flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Donor Details
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Form Fields */}
          <div className="flex-1 space-y-4">
            <div >
              <label className="block text-gray-700 font-semibold mb-1">Email ID</label>
              <input
                type="email"
                name="email"
                readOnly
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {/* <button className="w-[25%] ml-2 md:ml-5  bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
              >fetch</button> */}
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-xl"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-xl"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Gender</label>
                <input
                  type="text"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Current Address</label>
              <input
                type="text"
                name="curaddress"
                required
                value={formData.curaddress}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Current City</label>
              <input
                type="text"
                name="curcity"
                required
                value={formData.curcity}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Contact Number</label>
                <input required
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-xl"
                />
              </div>
              <div className="flex-1">
               <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
            Qualification
            </label>
             <select
           id="qualification"
           name="qualification"
    value={formData.qualification}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none bg-white"
  >
    <option value="">Select qualification</option>
    <option value="10th">10th</option>
    <option value="12th">12th</option>
    <option value="Diploma">Diploma</option>
    <option value="Graduate">Graduate</option>
    <option value="Postgraduate">Postgraduate</option>
    <option value="Other">Other</option>
  </select>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  required
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Upload Preview Section */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Adhaar Card Upload</label>
              <input
                type="file"
                name="adhaarPic"
                onChange={handleChange}
                className="w-full"
              />
              {formData.adhaarPic && (
                <img
                  src={ formData.adhaarPic instanceof File?
                    URL.createObjectURL(formData.adhaarPic):
                  formData.adhaarPic}
                  alt="Adhaar Preview"
                  className="mt-2 w-40 h-40 object-cover border rounded"
                />
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Profile Picture</label>
              <input
                type="file"
                name="profilePic"
                onChange={handleChange}
                className="w-full"
              />
              {formData.profilePic && (
                <img
                  
                  src={ formData.profilePic instanceof File ?
                    URL.createObjectURL(formData.profilePic):
                  formData.profilePic}
                  alt="Profile Preview"
                  className="mt-2 w-40 h-40 object-cover border rounded"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <button
            type="submit"
            ref={saveRef}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow"
          >
            Save
          </button>
          <button
            type="button" 
            onClick={updateDonor}
            ref={updateRef}
            className="bg-gray-300 hover:bg-gray-400 text-white px-6 py-2 rounded-xl shadow"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
