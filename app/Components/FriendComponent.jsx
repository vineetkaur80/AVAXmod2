"use client";

import { useState } from "react";

export default function HostelStudents({
  index,
  name,
  age,
  address,
  date,
  removeStudent,
}) {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div>
      <div className="" onClick={() => setShowDropDown(!showDropDown)}>
        <div className="flex justify-between items-center my-2  border-b-2 border-yellow-100 hover:bg-gray-700">
          <div>
            <p
              className={`font-bold mx-2 text-white
                    `}
            >
              {index + 1}
            </p>
          </div>
          <div className="">
            <img src="./business.png" className="h-10 w-10 mr-1" />
          </div>

          <div>
            <p className="text-blue-600 font-bold text-md">{name}</p>
            <p className="text-gray-600 font-extralight text-sm">{address}</p>
          </div>
          <div className="justify-end text-gray-400 ml-8 mr-8">
            <p className="text-white text-md">{date}</p>
          </div>
        </div>
      </div>

      {showDropDown && (
        <div className="">
          <div className="flex align-middle">
            <div>
              <p className=" font-bold text-md ">Name : <span className="text-blue-600">{name}</span></p>
              <p className="text-gray-600  text-md">
                <span className="text-white">Address </span>:{address}
              </p>
              <p className="text-gray-600  text-md">
                <span className="text-white">Age </span>:{parseInt(age)}
              </p>
              <p className=" font-bold text-md ">
                Registered On: <span className="text-blue-600">{date}</span>
              </p>
              <div className="flex justify-center my-2">
                <button
                  className="bg-gradient-to-r from-red-600 to-indigo-600 px-3 py-2 rounded-xl hover:scale-110 hover:rotate-1 transform transition-transform duration-300 ease-in-out"
                  onClick={() => removeStudent(index)}
                >
                  Student Left
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
