import React, { useContext, useState, useEffect } from "react";
import Todo from "./Todo";
// import Next7Days from './Next7Days'
import { appContext } from "../../../../Context/ContextConfig";

const Todos = () => {
  const { selectedProject, tasks, custom,setChanges } = useContext(appContext);
  const [customTasks, setCustomTasks] = useState([]);
  const [accordingToProject, setAccordingtoProject] = useState([])
  useEffect(() => {
    const fitered = tasks.filter((task) => task.lastDate === custom);
    const filteredProjects = tasks.filter((task)=>task.projectName === selectedProject)
    setAccordingtoProject(filteredProjects)
    setCustomTasks(fitered);
  }, [tasks,custom]);

  console.log(accordingToProject)

  

  return (
    <div className="tasks">
      <div className="selected_tasks">{selectedProject}</div>
      <div className="Tasks">
        
          
        
        { custom === selectedProject
          ?  customTasks.map((todo) => {
              return (
                <Todo
                  task={todo}  
                  taskCheck={todo.Checked}
                  taskText={todo.text}
                  taskDate={todo.lastDate}
                  taskAssignedProject={todo.projectName}
                  taskDesc={todo.desc}
                  key={todo.id}
                  
                /> 
              );
            }) 
          : tasks.map((todo) => (
              <Todo
                task={todo}
                taskCheck={todo.Checked}
                taskText={todo.text}
                taskDate={todo.lastDate}
                taskAssignedProject={todo.projectName}
                taskDesc={todo.desc}
                keyid={todo.id}
                key={todo.id}
              />
            ))} 
      </div>
    </div>
  );
};

export default Todos;
