import React, { useContext, useState } from 'react'
import { CaretUp, Palette} from 'react-bootstrap-icons'
import AddNewProjectBtn from "./AddNewProjectBtn"
import Project from './Project'
import { appContext } from '../../../../Context/ContextConfig'

const AddNewProject = () => {
  const {projects} = useContext(appContext)
  

  return (
    <div className="project-container">
      <div className="project-header">
        <div className="project-title">
          <Palette />
          <p>Projects</p>
        </div>
        <div className="pr-btns">
          <AddNewProjectBtn />
          <span>
            <CaretUp size={"18px"} />
          </span>
        </div>
      </div>
      <div className="project-body">
        {projects.map((project)=>{
          return(
            <Project projectt={project} key={project.id } keyid={project.id} />        
          )
        })}
      </div>
    </div>
  )
}

export default AddNewProject