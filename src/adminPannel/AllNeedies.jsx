import React, { useState } from 'react';

const AllNeedies= () => {
  const [needies, setNeedies] = useState([
    {
      name: "Meena Kumari",
      emailid: "meena@example.com",
      contact: 9876543210,
      dob: "1995-06-15",
      gender: "Female",
      address: "Sector 12, Delhi",
      status:1
    },
    {
      name: "Rajiv Mehta",
      emailid: "rajiv@example.com",
      contact: 9123456789,
      dob: "1992-03-28",
      gender: "Male",
      address: "Andheri, Mumbai",
       status:0
    },
    {
      name: "Sunita Rao",
      emailid: "sunita@example.com",
      contact: 9988776655,
      dob: "1990-12-05",
      gender: "Female",
      address: "Hitech City, Hyderabad",
       status:1
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">All Needies</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">DOB</th>
                <th className="py-3 px-4">Gender</th>
                <th className="py-3 px-4">Address</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {needies.map((needy, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition duration-150">
                  <td className="py-2 px-4">{needy.name}</td>
                  <td className="py-2 px-4">{needy.emailid}</td>
                  <td className="py-2 px-4">{needy.contact}</td>
                  <td className="py-2 px-4">{new Date(needy.dob).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{needy.gender}</td>
                  <td className="py-2 px-4">{needy.address}</td>
                   <td className="py-2 px-4">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        needy.status === 1
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {needy.status === 1 ? "Active" : "Blocked"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AllNeedies;
