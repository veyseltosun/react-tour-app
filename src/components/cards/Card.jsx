import React from 'react'
import { data } from "../../helper/data";
import "./Card.css";



function Card() {
  return (
    <div className='card-container'>
      <div className='cards'>
        <h2>{data[0].title}</h2>
        <img src={data[0].image } alt={data[0].title}/>
        <p>{data[0].desc}</p>


      </div>

    </div>
  )
}

export default Card