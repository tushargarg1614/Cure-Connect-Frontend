import React from 'react'

export const DashCard = (opt) => {
  return (
    <>
          <div
            onClick={opt.onClick}
            className="bg-white rounded-2xl shadow-xl p-6 cursor-pointer hover:scale-105 transform transition duration-300 flex items-center gap-4"
          >
            <img
              src={opt.image}
              alt={opt.title}
              className="w-26 h-26 md:h-36 md:w-36 object-contain"
            />
            <span className="text-xl font-semibold text-gray-700">
              {opt.title}
            </span>
          </div>
    </>
  )
}
