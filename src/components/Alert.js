import React, { useContext } from 'react'
import {InformationCircleIcon} from '@heroicons/react/24/solid'


const Alert = ({type,message}) => {


  return (
    <div className={`alert alert-${type}`}>
        <InformationCircleIcon style={{width:'20px',height:'20px'}}/>
        {message}
    </div>
  )
}

export default Alert