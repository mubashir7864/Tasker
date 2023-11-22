import React, { useContext } from 'react'
import { appContext } from '../../../../Context/ContextConfig'

const User = () => {
  const {user} =useContext(appContext)
  return (
    <div className='userContainer'>
        <div className="user">
            <h3>{user ? `User : ${user}` : "UserName"}</h3>
        </div>
    </div>

  )
}

export default User