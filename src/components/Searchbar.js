import React,{useState,useContext} from 'react'
import Alert from './Alert'
import ShowsContext from '../context/shows/showsContext'
import { AlertContext } from '../context/alerts/alertContext'

const Searchbar = () => {

  const {searchShow}=useContext(ShowsContext)

    const [search,setSearch]=useState('')

    const {alert,setAlert}=useContext(AlertContext)

    const onSearchHandler=(e)=>{
        e.preventDefault()
        if(search===''){
          setAlert('Please type something to search','danger')
        }
        else{
          searchShow(search)
        }
       
    }
  return (
    <div className='searchbar'>
      {alert?  <Alert message={alert.message} type={alert.type}/>:null}
       
        <form className='searchbar__form'>
            <input type='text' placeholder='Search your serie' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            <button className='btn btn-block' onClick={(onSearchHandler)}>Search</button>
        </form>
    </div>
  )
}

export default Searchbar