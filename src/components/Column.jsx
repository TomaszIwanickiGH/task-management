import React from 'react'
import Task from './Task'
import data from '../utils/data.json'

const Column = ({ color = 'white', title, amount }) => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex gap-4 items-center text-mediumGray">
        <div className={`bg-white w-[15px] h-[15px] rounded-full`} />
        <h3>
          {title} ({amount})
        </h3>
      </div>

      {/* board.columns.map((column) => column.tasks.map((task) => task.title)) */}

      {data.boards.map(
        (board) =>
          board.name === 'Platform Launch' &&
          board.columns.map(
            (column) =>
              column.name === title &&
              column.tasks.map((task, index) => {
                let counter = 0
                task.subtasks.map((subtask) => {
                  if (subtask.isCompleted) counter++
                })
                return <Task key={index} title={task.title} message={`${counter} of ${task.subtasks.length} subtasks`} />
              })
          )
      )}
    </div>
  )
}

export default Column
