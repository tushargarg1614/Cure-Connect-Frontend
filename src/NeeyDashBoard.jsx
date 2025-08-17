import React from "react";
import { useNavigate } from "react-router-dom";
import profile from './assets/profile.png'
import med from './assets/findMed.png'
import equip from './assets/findEquipment.png'
import logout from './assets/logout.png'
import { DashCard } from "./DashCard";



export default function NeedyDashboard() {
  const navigate = useNavigate();

  const options = [
    {
      title: "My Profile",
      image: profile,
      onClick: () => navigate("/needy/needyForm"),
    },
    {
      title: "Find Medicine",
      image: med,
      onClick: () => navigate("/needy/findMed"),
    },
    {
      title: "Find Equipment",
      image: equip,
      onClick: () => alert("🩺 CureConnect: This section is under development. We'll notify you once it's ready!"),
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
      <h1 className="text-3xl font-bold text-white mb-10">🌿 Needy Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {options.map((opt, index) => {
         return <DashCard {...opt} key={index}></DashCard>
        })}
      </div>
    </div>
  );
}
