import React, { useContext } from 'react'
import {Route, Routes, Navigate, useNavigate} from "react-router-dom"
import Home from '../Home/Home'
import Loginpage from '../Login/Loginpage'
import SignupPage from '../Signup/SignupPage'
import TaskManager from '../Taskmanager/TaskManager'
import { appContext } from '../../Context/ContextConfig'

const Routess = () => {
  const {user} = useContext(appContext)
  const navigate = useNavigate()

  return (
    <Routes>
        <Route path='/' element={<Navigate to="/home" />}/>
        <Route path='/Home' element={<Home />} />
        <Route path='/LoginPage' element={<Loginpage />} />
        <Route path='/SignupPage' element={<SignupPage />} />
        { user &&  <Route path='/Taskmanager' element={<TaskManager />} />}
    </Routes>
  )
}

export default Routess