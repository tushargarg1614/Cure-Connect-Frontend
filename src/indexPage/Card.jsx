import React from 'react'

export const Card = ({description,title,icon}) => {
  return (
    <>
     <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition   bg-gradient-to-br from-green-400 to-blue-600">
                <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                 {icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-blue-50">
                  {description}
                </p>
         </div>
    </>
  )
}
