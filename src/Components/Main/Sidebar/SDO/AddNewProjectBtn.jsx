import React, { useState } from 'react'
import { Plus } from 'react-bootstrap-icons'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../Firebase/Config";

import AddNewProjectForm from '../../Mainb/TDO/AddNewProjectForm'
import Model from '../../Mainb/TDO/Model'
import { useContext } from 'react';
import { appContext } from '../../../../Context/ContextConfig';

const AddNewProjectBtn = () => {
  const{setProjectChanges} =useContext(appContext)
    const [projectModel , setNewProjectModel]=useState(false)
    const [projectNameis, setProjectName] =useState("")

    const handlesubmit = (e) => {
      e.preventDefault();
      if (projectNameis) {
        addDoc(collection(db, "Projects"), {
          Name: projectNameis,
        });
      console.log(projectNameis)  
      setNewProjectModel(false);
      setProjectChanges((e)=>!e)
      }
  
    };

    

  return (
    <>
    <span onClick={()=>setNewProjectModel(true)}>
            <Plus size={"20px"}/>
    </span>
        <Model setShowModal={setNewProjectModel} showModal={projectModel} >
            <AddNewProjectForm 
            setValueModel={setNewProjectModel}
            projectNameis={projectNameis}
            setValue={setProjectName}
            handlesubmit={handlesubmit}
            />

        </Model>
    </>
  )
}

export default AddNewProjectBtn