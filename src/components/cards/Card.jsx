import React from 'react'
import { data } from "../../helper/data";
import "./Card.css";



function Card() {
  return (
    <div className='card-container'>
      <div className='cards'>
        <div className='title'>

          <h2>{data[0].title}</h2>

        </div>

        <img src={data[0].image} alt={data[0].title} />
        
        <div className='card-over'>
          <p>{data[0].desc}</p>
        </div>


      </div>

    </div>
  )
}

export default Card