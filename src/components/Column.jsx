import React from 'react'
import Task from './Task'
import data from '../utils/data.json'
import { useSelector } from 'react-redux'

const Column = ({ color = 'mainPurple', title, amount }) => {
  const { name } = useSelector((state) => state.boardName)
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex gap-4 items-center text-mediumGray">
        <div className={`bg-${color} w-[15px] h-[15px] rounded-full`} />
        <h3>
          {title} ({amount})
        </h3>
      </div>

      {data.boards.map(
        (board) =>
          board.name === name &&
          board.columns.map(
            (column) =>
              column.name === title &&
              column.tasks.map((task, index) => {
                let counter = 0
                task.subtasks.map((subtask) => {
                  if (subtask.isCompleted) counter++
                })
                return <Task key={index} title={task.title} message={`${counter} of ${task.subtasks.length} subtasks`} viewTask={() => console.log(task.description)} />
              })
          )
      )}
    </div>
  )
}

export default Column
