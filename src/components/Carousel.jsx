import React from 'react'

export default function Carousel(props) {
  const { id, images, buttons } = props
  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      {
        buttons && (
          <div className="carousel-indicators">
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            {
              images.map((image, index) => (
                <button key={index} type="button" data-bs-target={`#${id}`} data-bs-slide-to={index} className={index === 0 ? "active btn-carousel" : ' btn-carousel'} aria-current="true" aria-label={`image${index}`}></button>
              ))
            }
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )
      }

      <div className="carousel-inner">
        {
          images.map((image, index) => (
            <div key={index} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
              <img src={image} className="d-block w-100" alt="" />
            </div>
          ))
        }

      </div>
    </div>
  )
}
