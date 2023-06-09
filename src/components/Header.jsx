import React from 'react'

const Header = () => {
  return (
    <section className="p-6 bg-darkGray flex justify-between items-center w-full outline-1 outline-gray outline">
      <h2 className="text-white text-[24px]">Platform Launch</h2>
      <div className="flex gap-6 items-center">
        <button className="bg-mainPurple py-2 w-[140px] rounded-full text-white">+ Add Task</button>
        <img src="assets/icon-vertical-ellipsis.svg" alt="" />
      </div>
    </section>
  )
}

export default Header
