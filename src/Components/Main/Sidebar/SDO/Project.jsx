import React, { useContext, useState } from "react";
import { CaretDown, CaretUp, Pen,  Trash3, ViewStacked } from "react-bootstrap-icons";
import { appContext } from "../../../../Context/ContextConfig";
import { db } from "../../../../Firebase/Config";
import { deleteDoc,doc } from "firebase/firestore";

const Project = ({ projectt, keyid }) => {
  const {setSelectedProject , setProjectChanges} =useContext(appContext)
  const [editProject, setEditProject] = useState(false);

  const  deleteProject =(t)=>{
    const ref =  doc(db, "Projects", t)
    deleteDoc(ref)
    console.log("ref")
    setProjectChanges((e)=>!e)
  }


  return (
    <>
      <div className="project pr-pro" >
         <span>{projectt.Name}</span><span className="pr-pro-span" onClick={() => setEditProject(!editProject)} >{editProject ? <CaretUp /> : <CaretDown />}</span>
      </div>
      {editProject && (
        <>
          <div className="edit_option-container">
            <span className="tasks-counter">
                <button>Tasks : {projectt.tasks}</button>
            </span>
            <div className="edit_option">
            <span>
              <Trash3 size={"18px"} onClick={()=>deleteProject(keyid)}/>
            </span>
            <span onClick={()=>setSelectedProject(projectt.Name)}>
              <Pen size={"18px"} />
            </span>
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default Project;
