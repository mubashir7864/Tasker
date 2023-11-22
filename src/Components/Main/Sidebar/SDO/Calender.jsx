import React, { useContext, useState } from 'react'
import {Calendar2Date, CaretUp} from "react-bootstrap-icons"
import { calenderItems } from '../../../../Constants/Constant'
import moment from 'moment'
import { appContext } from '../../../../Context/ContextConfig'

const Calender = () => {
  const {setSelectedProject, custom,  onChangesearchDate} = useContext(appContext)

  
  return (
    <div className="calender">
      <div className="calender-header">
        <div className="calender-title">
          <Calendar2Date size={"18px"} />
          <p>Calender</p>
        </div>
        <div className="btns">
          <span>
            <CaretUp />
          </span>
        </div>
      </div>
      <div className='items'>
        {
          calenderItems.map((e)=>{
            if(e === "Custom"){
              return(
                <div key={e}className='item'>
                <label>Custom</label>
                <input type="Date" className='item' value={custom} onChange={onChangesearchDate}/>
                </div>
              )
            }else{
            return(
              <div className="item" key={e} onClick={()=>setSelectedProject(e)}>
                {e}
              </div>
            )}

          })
        }
      </div>
    </div>
  )
}

export default Calender