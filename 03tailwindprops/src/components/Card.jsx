import React from 'react';

export default function Card(props) {
  // console.log("props:",props);
  return(
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/6099492/pexels-photo-6099492.jpeg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.details.title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
         <button
      className="px-4 mt-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
    >
      {props.details.btnTxt} 
    </button>
      </div>
    )
}

