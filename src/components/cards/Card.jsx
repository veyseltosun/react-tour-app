import React, { useState } from 'react'
import { data } from "../../helper/data";
import "./Card.css";



function Card() {
  const [showImage, setShowImage] = useState(true)
  return (
    <div className='card-container' onClick={() => setShowImage(!showImage)}>
      {showImage ? (<>
        {data.map((card) => {
          const { id, desc, title, image } = card
          return (
            <div className='cards' key={id}>
              
              <img src={image} alt={title} />

            
            </div>
          )
        })}
      </>
      ) : (<>
        {data.map((card) => {
          const { id, desc, title, image } = card
          return (
            <div className='cards' key={id}>
              <div className='title'>
                <h2>{title}</h2>
              </div>
              <img src={image} alt={title} />

              <div className="card-over">
                <p>{desc}</p>
              </div>

            </div>
          )
        })}
      </>
      )}
      <>
        {data.map((card) => {
          const { id, desc, title, image } = card
          return (
            <div className='cards' key={id}>
              <div className='title'>
                <h2>{title}</h2>
              </div>
              <img src={image} alt={title} />

              <div className="card-over">
                <p>{desc}</p>
              </div>

            </div>
          )
        })}
      </>


    </div>
  )
}

export default Card