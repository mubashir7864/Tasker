import React,{useContext, useState} from 'react'
import TaskForm from './TaskForm'
import moment from 'moment';
import { appContext } from '../../../../Context/ContextConfig';

const EditTodo = () => {
  const {projects} = useContext(appContext)
  const [task, setNewTask] = useState("");
  const [desc, setDesc] = useState("");
  const [taskProject, setTaskProject] =useState("")
  const [day, setDay] = useState(""); // moment().format("MMM Do YY");

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDay(newDate);
    console.log(newDate); //value picked from date picker
  };
  const handlesubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
    <div className="editTodo">
      <div className="edit-header">
        Edit-Task
      </div>
      <div className="edit-Container">
      <TaskForm 
        task={task}
        setNewTask={setNewTask}
        handlesubmit={handlesubmit}
        desc={desc}
        setDesc={setDesc}
        day={day}
        setDay={setDay}
        onChangeDate={onChangeDate}
        buttontext={"Update"}
        projects={projects}
        setTaskProject={setTaskProject}
        taskProject={taskProject}/>
      </div>

    </div>
    </>
    
  )
}

export default EditTodo