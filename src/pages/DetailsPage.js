import React ,{useEffect,useContext}from 'react'
import ShowsContext from '../context/shows/showsContext'
import NoImage from '../images/noImage.jpeg'
import {useParams} from 'react-router-dom'
const DetailsPage = () => {

  const {SetSingleShow,singleShow,loading}=useContext(ShowsContext)
  const {id}=useParams()
  useEffect(() => {
   SetSingleShow(id)
  }, [])


  const removetags=(text)=>{
    if(text===null || text===""){
      return false;
    }
    else{
      text=text.toString();
    }

    return text.replace(/(<([^>]+)>)/gi, "");
  }
  return (
    <>
      {loading?<h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Loading...</h2>:
      
      <div className='singleshow'>
          <img src={singleShow.image?singleShow.image.medium:NoImage} alt=''></img>

          <div className='singleshow__info'>
              <h2 className='singleshow__name'>{singleShow.name}</h2>
              {singleShow.genres && singleShow.genres.map((genres)=>{
                return(
                  <span key={genres} className='singleshow__genre'>{genres}</span>
                )
              })}
              <p>
                <strong>Status :  </strong>
                {singleShow.status && singleShow.status}
              </p>

              <p>
                <strong>Rating :  </strong>
                {singleShow.rating?(singleShow.rating.average?singleShow.rating.average:'No Rating'):'No Rating'}
              </p>

              <p>
                <strong>Official Site :  </strong>
                {singleShow.officialSite ? <a href={singleShow.officialSite} target='_blank' rel='noreferrer'>{singleShow.officialSite}</a>:'No Official Site'}
              </p>

              <p>
              <strong>Summary :  </strong>
                {singleShow.summary && removetags(singleShow.summary)}
              </p>
          </div>
      </div>
      }
      
    </>
  )
}

export default DetailsPage