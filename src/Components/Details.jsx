import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({list}) => {
    const {id}=useParams()
    // console.log(id)
    const item=list.find(el=>el.id==id)
    console.log(item)
  return (
    <div>
        <img src={item.pic} alt={item.name} style={{width:"30%"}} />
        <h1>
            {item.name}
        </h1>
    </div>
  )
}

export default Details