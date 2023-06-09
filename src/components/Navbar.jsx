import React from 'react'
import data from '../utils/data.json'

const Navbar = () => {
  return (
    <nav className="p-6 bg-darkGray flex flex-col w-[18%] gap-[45vh]">
      <div className="flex flex-col gap-12 ">
        <div>
          <img src="assets/logo-light.svg" alt="logo" />
        </div>
        <div className="text-mediumGray">
          <h3 className="font-bold text-[13px] tracking-[3px]">ALL BOARDS ({data.boards.length})</h3>
          <ul className="flex flex-col gap-4 mt-8">
            {data.boards.map((board) => (
              <li key={board.name} className="flex gap-4 items-center">
                <img src="assets/icon-board.svg" alt="icon" />
                {board.name}
              </li>
            ))}
            <li className="text-mainPurple flex gap-4 items-center">
              <img src="assets/icon-board-purple.svg" alt="icon" />
              +Create New Board
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-veryDarkGray flex gap-4 justify-center items-center py-4 rounded-md">
          <img src="assets/icon-light-theme.svg" alt="icon" />
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
          <img src="assets/icon-dark-theme.svg" alt="icon" />
        </div>
        <div className="flex gap-2 items-center">
          <img src="assets/icon-hide-sidebar.svg" alt="icon" />
          <p className="text-mediumGray font-[600] text-[14px]">Hide Sidebar</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
