import React from 'react';

const dummyDonors = [
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    curcity: "Delhi",
    contact: 9876543210,
    occupation: "Engineer",
    status: 1,
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    curcity: "Mumbai",
    contact: 9123456780,
    occupation: "Teacher",
    status: 0,
  },
  {
    name: "Aman Verma",
    email: "aman@example.com",
    curcity: "Chandigarh",
    contact: 9988776655,
    occupation: "Doctor",
    status: 1,
  },
];

const AllDonors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">All Donors</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Occupation</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyDonors.map((donor, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-2 px-4">{donor.name}</td>
                  <td className="py-2 px-4">{donor.email}</td>
                  <td className="py-2 px-4">{donor.curcity}</td>
                  <td className="py-2 px-4">{donor.contact}</td>
                  <td className="py-2 px-4">{donor.occupation}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        donor.status === 1
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {donor.status === 1 ? "Active" : "Blocked"}
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

export default AllDonors;
