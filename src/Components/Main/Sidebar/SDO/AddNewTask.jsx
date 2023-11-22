import React, { useContext, useEffect, useState } from "react"
import Model from "../../Mainb/TDO/Model";
import TaskForm from "../../Mainb/TDO/TaskForm";
import moment from "moment";
import { db } from "../../../../Firebase/Config";
import {collection , addDoc} from "firebase/firestore"
import { appContext } from "../../../../Context/ContextConfig";
import { calenderItems } from "../../../../Constants/Constant";

const AddNewTask = () => {
  const {selectedProject, projects, tasks, setChanges} = useContext(appContext)
  const [showTodoModal, setShowModal] = useState(false);
  const [taskProject, setTaskProject] =useState(selectedProject)
  const [task, setNewTask] = useState("");
  const [desc, setDesc] = useState("");
  const [day, setDay] = useState(moment(new Date()).format("YYYY-MM-DD").toString()); // moment().format("MMM Do YY");

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD").toString();
    setDay(newDate);
  };

  const handleShowModel = ()=>{
    setShowModal(false)
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    if( task && !calenderItems.includes(taskProject) ){
          addDoc(collection(db, "Tasks"),{
          text: task,
          desc: desc,
          lastDate: day,
          Checked: false,
          projectName: taskProject

        })
        setChanges((e)=>!e)
        setShowModal(false)
        setDay(moment(new Date()).format("YYYY-MM-DD").toString())
        setDesc("")
        setNewTask("")
    }
  }
  // useEffect(() => {
  //   setTaskProject(selectedProject)
  // }, [selectedProject])
  

  return (
    <div className="AddNewTask">
      <div className="task-btn">
        <button
          className="addNew-btn"
          onClick={() => setShowModal(!showTodoModal)}
        >
          + New Task
        </button>
      </div>
      <Model showModal={showTodoModal} setShowModal={setShowModal}>
        <TaskForm 
        heading={"Add New Task ... ..."}
        task={task}
        setNewTask={setNewTask}
        handlesubmit={handlesubmit}
        desc={desc}
        setDesc={setDesc}
        projects={projects}
        day={day}
        setDay={setDay}
        onChangeDate={onChangeDate}
        handleShowModel={handleShowModel}
        buttontext={"Add Task"}
        setTaskProject={setTaskProject}
        taskProject={taskProject}/>
      </Model>
    </div>
  );
};

export default AddNewTask;
