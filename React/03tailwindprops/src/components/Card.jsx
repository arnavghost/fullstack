import React from 'react'

function Card({ username }) { // used props : props.useranme
  return (
    <div className="w-60 rounded-xl shadow-lg overflow-hidden bg-white">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">{username}</h2>
      </div>
    </div>
  )
}

export default Card
