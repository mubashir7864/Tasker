import React from 'react'
import Sidebar from '../../Components/Main/Sidebar/Sidebar'
import Mainb from '../../Components/Main/Mainb/Mainb'
import EditTodo from '../../Components/Main/Mainb/TDO/EditTodo'
import Next7Days from '../../Components/Main/Mainb/TDO/Next7Days'
import AddNewProject from '../../Components/Main/Sidebar/SDO/AddNewProject'
import Calender from '../../Components/Main/Sidebar/SDO/Calender'
import "../../App.css"
import User from '../../Components/Main/Mainb/TDO/User'
import AddNewTask from "../../Components/Main/Sidebar/SDO/AddNewTask"
import Todos from '../../Components/Main/Mainb/TDO/Todos'

const TaskManager = () => {
  return (
    <div className='taskManager'>
        <div className="sidebar">
        <Sidebar>
            <User />
            <hr />
            <AddNewTask />
            <Calender />
            <AddNewProject />
        </Sidebar>
        </div>
        <div className="main">
        <Mainb>
            <Todos />
            <Next7Days />
            <EditTodo />
        </Mainb>
        </div>
    </div>
  )
}

export default TaskManager