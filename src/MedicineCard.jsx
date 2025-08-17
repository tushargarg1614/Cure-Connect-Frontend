
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function MedicineCard({ data, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-2xl mb-4 transition-transform hover:scale-[1.01]">
      <h3 className="text-lg font-bold text-green-700 mb-2">{data.medicine}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
        <p><span className="font-semibold">Qty:</span> {data.qty}</p>
        <p><span className="font-semibold">Packing:</span> {data.packing}</p>
        <p><span className="font-semibold">Expiry:</span> {data.expiry?.slice(0,10)}</p>
        <p><span className="font-semibold">Company:</span> {data.company}</p>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={onEdit}
          className="px-4 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-1"
        >
          <FaEdit size={16} /> Edit
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 flex items-center gap-1"
        >
          <FaTrash size={16} /> Delete
        </button>
      </div>
    </div>
  );
}