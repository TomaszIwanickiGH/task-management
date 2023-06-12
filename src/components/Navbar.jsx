import React, { useState } from 'react'
import data from '../utils/data.json'
import { useDispatch, useSelector } from 'react-redux'
import { setBoardName } from '../redux/boardName'

const Navbar = () => {
  // const { name } = useSelector((state) => state.boardName)
  const dispatch = useDispatch()

  const [isActive, setIsActive] = useState('Platform Launch')

  return (
    <nav className="bg-darkGray flex flex-col w-[18%] gap-[45vh]">
      <div className="flex flex-col gap-12 pt-2">
        <div className="p-6 hover:cursor-pointer">
          <img src="assets/logo-light.svg" alt="logo" onClick={() => dispatch(setBoardName('Platform Launch'))} />
        </div>
        <div className="text-mediumGray">
          <h3 className="font-bold text-[13px] tracking-[3px] px-6">ALL BOARDS ({data.boards.length})</h3>
          <ul className="flex flex-col gap-4 mt-8">
            {data.boards.map((board) => (
              <li
                key={board.name}
                className={`px-6 py-2 flex gap-4 items-center ${isActive === board.name ? 'bg-mainPurple text-white' : 'text-mediumGray hover:bg-lightPurple'} w-[90%] hover:cursor-pointer hover:text-white  rounded-se-2xl rounded-ee-2xl`}
                onClick={() => {
                  dispatch(setBoardName(board.name))
                  setIsActive(board.name)
                }}
              >
                <img src="assets/icon-board.svg" alt="icon" />
                {board.name}
              </li>
            ))}
            <li className="text-mainPurple hover:text-lightPurple flex gap-4 items-center px-6 hover:cursor-pointer">
              <img src="assets/icon-board-purple.svg" alt="icon" />
              +Create New Board
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6">
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
