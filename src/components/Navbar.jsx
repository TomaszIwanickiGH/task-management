import React, { useState } from 'react'
import data from '../utils/data.json'
import { useDispatch, useSelector } from 'react-redux'
import { setBoardName } from '../redux/boardName'

const Navbar = () => {
  const { name } = useSelector((state) => state.boardName)
  const dispatch = useDispatch()

  const [isActive, setIsActive] = useState('Platform Launch')
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleUtils, setToggleUtils] = useState(false)

  return (
    <nav className="bg-darkGray lg:w-[18%] md:w-[30%] w-full md:h-[100vh]">
      <div className="md:flex hidden flex-col gap-[35vh] border-r-[1px] border-gray">
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
      </div>

      {/* Mobile Nav */}

      <div className="md:hidden flex items-center pr-6 relative">
        <div className="p-6 hover:cursor-pointer">
          <img src="assets/logo-mobile.svg" alt="logo" onClick={() => dispatch(setBoardName('Platform Launch'))} />
        </div>
        <span className="text-white text-[18px] mr-2" onClick={() => setToggleMenu((prev) => !prev)}>
          {name}
        </span>{' '}
        <img src="assets/icon-chevron-down.svg" alt="arrow-down" className="mt-1" onClick={() => setToggleMenu((prev) => !prev)} />
        {toggleMenu && (
          <div className="absolute w-[300px] top-[100px] left-[15%] bg-darkGray rounded-2xl">
            <div className="text-mediumGray py-4">
              <h3 className="font-bold text-[13px] tracking-[3px] px-6">ALL BOARDS ({data.boards.length})</h3>
              <ul className="flex flex-col gap-4 mt-8">
                {data.boards.map((board) => (
                  <li
                    key={board.name}
                    className={`px-6 py-2 flex gap-4 items-center ${isActive === board.name ? 'bg-mainPurple text-white' : 'text-mediumGray hover:bg-lightPurple'} w-[90%] hover:cursor-pointer hover:text-white  rounded-se-2xl rounded-ee-2xl`}
                    onClick={() => {
                      dispatch(setBoardName(board.name))
                      setIsActive(board.name)
                      setToggleMenu(false)
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
              <div className="mt-8 mb-2 px-6">
                <div className="bg-veryDarkGray flex gap-4 justify-center items-center py-4 rounded-md">
                  <img src="assets/icon-light-theme.svg" alt="icon" />
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                  <img src="assets/icon-dark-theme.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-end gap-4 flex-1">
          <button className="bg-mainPurple py-1 w-[50px] rounded-full text-white text-[18px] font-bold">+</button>
          <img src="assets/icon-vertical-ellipsis.svg" alt="" className="h-[25px]" onClick={() => setToggleUtils((prev) => !prev)} />
        </div>
        {toggleUtils && (
          <div className="absolute w-[150px] top-[100px] right-[5%] bg-veryDarkGray rounded-2xl px-6 py-4">
            <div>
              <p className="text-mediumGray mb-2">Edit Board</p>
              <p className="text-red">Delete Board</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
