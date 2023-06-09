import React from 'react'
import Column from './Column'
import data from '../utils/data.json'

const Main = () => {
  return (
    <main className="bg-veryDarkGray overflow-hidden">
      <div className="flex">
        {data.boards.map((board) => board.name === 'Platform Launch' && board.columns.map((column, index) => <Column key={index} title={column.name} amount={column.tasks.length} />))}
        <div className="bg-darkGray flex items-center justify-center mt-[5.4rem] rounded-md w-[300px] h-[700px]">
          <h3 className="text-[20px] text-lightGray">+ New Column</h3>
        </div>
      </div>
    </main>
  )
}

export default Main
