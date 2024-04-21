import React from 'react'

export default function Carousel(props) {
  const { id, images} = props
  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {
          images.map((image,index) => (
            <div key={index} className={index === 0 ?'carousel-item active' :'carousel-item'}>
              <img src={image} className="d-block w-100" alt="" />
            </div>
          ))
        }
        
      </div>
    </div>
  )
}
