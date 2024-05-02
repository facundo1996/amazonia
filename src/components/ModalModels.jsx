import React from 'react'
import Carousel from './Carousel'

export default function ModalModels(props) {
  const { data } = props
  return (
    <div className="modal fade" id="modal-models" aria-labelledby="title-models-modal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content custom-modal">

          <button type="button" className="btn btn-dark btn-close-modal" data-bs-dismiss="modal">X</button>
          <div className="modal-body">
            <div className='container-modal'>
              <div className='container-carousel'>
                {
                  data && data.imagenes && <Carousel id={'carouselModal'} images={data.imagenes} buttons={true} />
                }
              </div>
              <div className='info-modal'>
                <div className='title'>{data.titulo}</div>
                <div>
                  {
                    data && data.textoLargo && data.textoLargo.map((description, index) => (
                      <p key={index}>{description}</p>
                    ))
                  }
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
