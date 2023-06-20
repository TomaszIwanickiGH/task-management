import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsClosed } from '../redux/boardName'

const TaskDetails = ({ title, description, subtasksCompleted, subtasks, stage }) => {
  const { isClosed } = useSelector((state) => state.boardName)
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(setIsClosed)} className={`${isClosed ? 'absolute' : 'hidden'} top-0 left-0 z-10 darken-bg w-full h-[100vh]`}>
      <div className="bg-gray rounded-2xl min-w-[500px] flex flex-col gap-6 p-6 absolute top-[150px] left-[500px]">
        <h2 className="text-white text-[20px] font-[600]">{title}</h2>
        <p className="text-mediumGray">{description}</p>
        <h3>
          Subtasks ({subtasksCompleted} of {subtasks.length})
        </h3>
        {subtasks.map((subtasks) => (
          <div key={subtasks.id}>
            <label htmlFor="">
              {subtasks.title}
              <input type="checkbox" name="" id="" onChange={() => {}} checked={subtasks.isCompleted ? true : false} />
            </label>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <h4 className="text-white">Current Status</h4>
          <p>{stage}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails
