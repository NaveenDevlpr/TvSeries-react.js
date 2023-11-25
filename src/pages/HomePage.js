import React,{useContext} from 'react'
import Searchbar from '../components/Searchbar'
import ShowsContext from '../context/shows/showsContext'
import ListItem from '../components/ListItem'
import NoBanner from '../images/noImage.jpeg'
const HomePage = () => {

  const {shows,loading}=useContext(ShowsContext)
  return (
    <div className='homepage'>
      <Searchbar/>
      {loading?<h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Loading...</h2>:
      
      <div className='homepage__list'>
        {shows.map((item)=>{
          return(
           <ListItem
           key={item.show.id}
           id={item.show.id}
           name={item.show.name}
           image={item.show.image ? item.show.image.medium:NoBanner}
           rating={item.show.rating.average?item.show.rating.average:'No Rating'}/>
          )
        })}
      </div>
      }
    </div>
  )
}

export default HomePage