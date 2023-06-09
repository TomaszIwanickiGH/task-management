import React from 'react'

const Task = ({ title, message }) => {
  return (
    <div className="bg-darkGray w-[300px] min-h-[90px] rounded-2xl flex flex-col p-4 gap-2">
      <h3 className="text-white">{title}</h3>
      <p className="text-mediumGray text-[14px]">{message}</p>
    </div>
  )
}

export default Task
