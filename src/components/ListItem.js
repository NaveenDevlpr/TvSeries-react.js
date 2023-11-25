import React from 'react'
import { Link } from 'react-router-dom'
const ListItem = ({image,name,rating,id}) => {
  return (
    <Link to={`/tvserie/${id}`} className='listitem'>
        <img src={image} alt=''></img>
        <div className='listitem__info'>
            <h4 className='info__name'>{name}</h4>
            <h4 className='info__rating'>{rating}</h4>
        </div>
    </Link>
  )
}

export default ListItem