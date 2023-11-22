import React, {useEffect, useState} from 'react';
import "./App.css"
import Routess from './Pages/PageRoutes/Routess';
import { appContext } from './Context/ContextConfig';
import moment from 'moment';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/Config";


function App() {
  const [user, setUser]= useState("")
  const [changes, setChanges] = useState(false)
  const [projectChanges, setProjectChanges] = useState(false)
  const [custom ,  setCustom] = useState(moment(new Date()).format("YYYY-MM-DD").toString())
  const defaultProject = "All Todos"
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] =useState(defaultProject)

  useEffect(() => {    
    let querySnapshot= getDocs(collection(db, "Tasks")).then((snap) => {
       const data = snap.docs.map((doc) => {
         return {
           id: doc.id,
           ...doc.data()
         }
       })
       setTasks(data)
     });
     console.log("task running")     
 },[changes]);

  
  
  

  useEffect(() => {
   let querySnapshot =  getDocs(collection(db, "Projects")).then((snap) => {
      const data = snap.docs.map((doc) => {
          const projectName = doc.data().Name
        return {
          id: doc.id,
          Name: projectName,
        };
      });
      setProjects(data);
    });
},[projectChanges]);

 

  const onChangesearchDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD").toString();
    setCustom(newDate);
    console.log(newDate)
    setSelectedProject(newDate)
  };

 

  return (
    <appContext.Provider value={{user, setUser, selectedProject, setSelectedProject, tasks, projects, onChangesearchDate, custom,changes,setChanges,projectChanges,setProjectChanges }}>
    <div className="App">
      <Routess />
    </div>
    </appContext.Provider>
  );
}

 



// export function useProjects(tasks) {
//     const [projects, setProjects] = useState([]);
    
//     const calculateNumOfTasks=(projectName, tasks)=>{
//         return tasks.filter((task)=>task.projectName === projectName)

//     }

//     useEffect(() => {
//      let querySnapshot =  getDocs(collection(db, "Projects")).then((snap) => {
//         const data = snap.docs.map((doc) => {
//             const projectName = doc.data().Name
//           return {
//             id: doc.id,
//             Name: projectName,
//             tasks: calculateNumOfTasks(projectName, tasks)
//           };
//         });
//         setProjects(data);
//       });
//   },[ ]);
  
//     return projects;
//   }



export default App;
