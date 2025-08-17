import React, { useEffect, useState } from "react";
import axios from '../../axiosInstance'

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    (async()=>{
   let resp= await axios.post('/user/allUsers');
  if(resp.data.status==true){
    
    setUsers(resp.data.obj);
  }else alert(resp.data.error);
    })()

  },[])

  const handleStatusUpdate = async(id, status) => {
   let resp= await axios.post('/user/updateStatus',{id,status});
    if(resp.data.status==true){
     setUsers(resp.data.obj);
  }else alert(resp.data.error);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">All Users</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-green-100 text-gray-800">
              <tr>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">User Type</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Operation</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4 capitalize">{user.userType}</td>
                  <td className="py-2 px-4">
                    {user.status === 1 ? (
                      <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Active</span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">Blocked</span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex flex-wrap gap-2">
                      <button disabled={user.userType=='admin'?true:false}
                        onClick={() => handleStatusUpdate(user._id, 0)}
                        className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                      >
                        Block
                      </button>
                      <button
                        disabled={user.userType=='admin'?true:false}
                        onClick={() => handleStatusUpdate(user._id, 1)}
                        className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded"
                      >
                        Unblock
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
