import React from 'react'
import { data } from "../../helper/data";
import "./Card.css";



function Card() {
  return (
    <div className='card-container'>

      {data.map((card)=>{
        const{id, desc, title, image} = card
        return(
          <div className='cards' key={id}>
            <div className='title'>
              <h2>{title}</h2>
            </div>
            <img src={image} alt={title}/>
            
            <div className="card-over">
              <p>{desc}</p>
            </div>

          </div>
        )
      })}
      

    </div>
  )
}

export default Card