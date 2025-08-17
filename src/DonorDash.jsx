import React from "react";
import { useNavigate } from "react-router-dom";
import profile from './assets/profile.png'
import avail_med from './assets/avail_med.png'
import availed_meds from './assets/availed_meds.png'
import equip from './assets/findEquipment.png'
import logout from './assets/logout.png'
import { DashCard } from "./DashCard";


export default function DonorDash() {
  const navigate = useNavigate();

  const options = [
    {
      title: "My Profile",
      image: profile,
      onClick: () => navigate("/donor/donorForm"),
    },
    {
      title: "Avail Medicine",
      image: avail_med,
      onClick:()=>navigate("/donor/mediAvailForm"),
    },
    {
      title: "Avail Equipment",
      image: equip,
      onClick: () => alert("🩺 CureConnect: This section is coming soon. We'll notify you once it's ready!"),
    },
    {
      title: "your availed medicines ",
      image: availed_meds,
      onClick: () => navigate("/donor/medicineList"),
    },
    {
      title: "Logout",
      image: logout,
      onClick: () => {
        if(!confirm('Are You Sure You Want To LogOuT? ')){
            return;
        }
        localStorage.clear();
        navigate("/");
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400 p-6 flex flex-col items-center">
  <h1 className="text-3xl font-bold text-white mb-10">💊 Donor Dashboard</h1>

  {/* Top row - 3 cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {options.slice(0, 3).map((opt, index) => (
      <DashCard {...opt} key={index}></DashCard>
    ))}
  </div>

  {/* Bottom row - 2 cards centered */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
    {options.slice(3, 5).map((opt, index) => (
      <DashCard {...opt} key={index + 3}></DashCard>
    ))}
  </div>
</div>

  );
}
