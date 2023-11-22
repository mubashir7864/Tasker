import React from 'react'
import { Bell, Calendar2Day, Palette, X } from "react-bootstrap-icons";


const TaskForm = ({heading ,
  task,
   setNewTask,
   handlesubmit,
   desc, 
   setDesc, 
   day, 
   projects, 
   onChangeDate, 
   handleShowModel,
   buttontext,
   setTaskProject,
  taskProject}) => {
  return (
    <>
    <form className="form-addNewTask" onSubmit={handlesubmit}>
          <div className="textContainer sm-textContainer">
            <h3>{heading}</h3>
            <input
              type="text"
              name="text"
              value={task}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="task..."
              autoFocus
            />
          </div>
          <div className="Desc_Container sm-Desc_Container">
            <h4>Description ... ... </h4>
            <input
              type="text"
              name="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="task description..."
            />
          </div>
          <div className="remind">
            <div className="title">
              <Bell />
              <p>Remind me</p>
            </div>
          </div>
          <div className="pickDay">
            <div className="title">
              <Calendar2Day />
              <p>Choose a Day.....</p>
              <input type="date" value={day} onChange={onChangeDate} />
            </div>
          </div>
          <div className="pick_Project">
            <div className="title">
              <Palette />
              <p>Choose A project</p>
            </div>
            <div className="projects">
            { projects.length > 0 ?
                projects.map((pro)=>
                <div className={`project ${taskProject === pro.Name ? `active` : ``}`}
                onClick={()=>setTaskProject(pro.Name)} key={pro.id}>
                    {pro.Name}
                </div>) : 
                <div style={{color:"#ff0000"}}>
                  <p>Please Add project before Proceeding</p>
                </div>
            }
            </div>
          </div>
          <hr />
          <div className="button-container">
            <div  onClick={handleShowModel}>
              <button className="cancel">Cancel</button>
            </div>
            <div >
              <button className="confirm">{buttontext} </button>
            </div>
          </div>
        </form>
    </>
  )
}

export default TaskForm