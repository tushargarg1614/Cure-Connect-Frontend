import React from "react";
import { useNavigate } from "react-router-dom";
import manage_users from '../assets/manage_users.png'
import donors from '../assets/donors.png'
import needies from '../assets/needies.png'
import logout from '../assets/logout.png'
import { DashCard } from "../DashCard";



export default function AdminDash() {
  const navigate = useNavigate();

  const options = [
    {
      title: "Manage Users",
      image: manage_users,
      onClick: () => navigate("/admin/allUsers"),
    },
    {
      title: "Donors",
      image: donors,
      onClick: () => navigate("/admin/allDonors"),
    },
    {
      title: "Needies",
      image: needies,
      onClick: () => navigate("/admin/allNeedies"),
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
      <h1 className="text-3xl font-bold text-white mb-10">🌿 Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {options.map((opt, index) => {
         return <DashCard {...opt} key={index}></DashCard>
        })}
      </div>
    </div>
  );
}
