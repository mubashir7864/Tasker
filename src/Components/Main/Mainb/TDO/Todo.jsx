import React, { useContext, useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../Firebase/Config";
import {
  CheckCircleFill,
  Circle,
  Trash3,
  CaretUp,
  CaretDown,
  Pen,
} from "react-bootstrap-icons";
import { appContext } from "../../../../Context/ContextConfig";

const Todo = ({taskCheck,
  taskText,
  taskDate,
  taskAssignedProject,
  taskDesc,
  task,
  keyid
 }) => {
  const {setChanges} = useContext(appContext)
  const [showDesc, setShowDesc] = useState(false)
  const deleteTask =(t)=>{
    const ref = doc(db, "Tasks", t)
    deleteDoc(ref)
    console.log("ref")
    setChanges((e)=>!e)
  }
  const checkTask =  (t, task)=>{
    const ref = doc(db, "Tasks", task.id)
     updateDoc(ref ,{Checked : !task.Checked})
     setChanges((e)=>!e)
  }



  return (
    <div className="task">
      <div className="task_container">
        <div className="check_task" onClick={()=>checkTask(keyid, task)}>
          {taskCheck ? (
            <span className="checked">
              <CheckCircleFill color="#ebebeb" />
            </span>
          ) : (
            <span className="unChecked">
              <Circle color="blueVoilet" />
            </span>
          )}
        </div>
        <div className="task_text">
          <p style={{color: taskCheck ? '#bebebe' : '#000000'}}>{taskText}</p>
          <span>{taskDate} - {taskAssignedProject}</span>
          <div className={`line ${taskCheck ? 'line-through': ''}`} ></div>
        </div>
        { !taskCheck &&
        <div className="desc_dynamic">
          <span onClick={()=>setShowDesc(!showDesc)} >
            {showDesc ? <CaretUp /> : <CaretDown />}
          </span>
        </div>
        }
        <div className="task_edit_btns">
          <span>
            <Pen size={"15px"} />
          </span>
          <span>
            <Trash3 size={"15px"} onClick={()=>deleteTask(keyid)}/>
          </span>
        </div>       
      </div>
      { showDesc &&
        <div className="task_desc">
        <p>Desc: {taskDesc}</p>
        <hr />
      </div>
      }
    </div>
  );
};

export default Todo;
