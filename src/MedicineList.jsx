import React from 'react';
import MedicineCard from './MedicineCard';
import axios from '../axiosInstance'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function MedicineList( ) {
  let navigate=useNavigate();
const[medicines,setMedicines]=useState([]);

    useEffect(()=>{
      let activeEmail=localStorage.getItem('activeUser');
        let fetchMed=async()=>{
       let resp= await axios.post('/donor/getAvailedMed',{email:activeEmail})
        if(resp.data.status==true){
            setMedicines(resp.data.obj);
        }else alert(JSON.stringify(resp.data.error));
    }
    fetchMed();
    },[medicines])

    let onEdit=async(med)=>{
      console.log()
    navigate('/donor/MediAvailForm',{state:{medData:med}});
       
    }

    let onDelete=async(id)=>{
      if(!confirm('Are You Sure U wanna delete This medicine?')){
        return;
      }
       let resp=await axios.post('/donor/deleteMed',{id:id,email:'tushargarg50797@gmail.com'});
       if(resp.data.status==true){
        // alert(JSON.stringify(resp.data.msg));
        setMedicines(resp.data.obj);
       }else alert(JSON.stringify(resp.data.error));
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400 px-4 py-8 flex justify-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Listed Medicines</h2>
        {medicines.length > 0 ? (
          medicines.map((med, index) => (
            <MedicineCard
              key={index}
              data={med}
              onEdit={() => onEdit(med)}
              onDelete={() => onDelete(med._id)}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No medicines listed yet.</p>
        )}
      </div>
    </div>
  );
}