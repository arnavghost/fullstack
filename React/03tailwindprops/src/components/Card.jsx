import React from 'react'

// Card component receives "username" as a prop
// props are like function parameters passed from parent (App.jsx)
function Card({ username}) { // destructured props : props.username
  return (
    // Outer card container with Tailwind classes for styling
    <div className="w-60 rounded-xl shadow-lg overflow-hidden bg-white">

      {/* Image at the top of the card */}
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="w-full h-40 object-cover"
      />

      {/* Text section under the image */}
      <div className="p-4 bg-white">
        {/* Displaying the username passed from props */}
        <h2 className="text-lg font-semibold text-gray-800">{username}</h2>
      </div>
    </div>
  )
}

export default Card   // Exporting Card so it can be imported in App.jsx
 
