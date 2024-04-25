import React, { useState } from 'react'
import Carousel from './Carousel'
import ModalModels from './ModalModels'

export default function Models() {

  const tehobroma = {
    title: 'Casa Bromelia ',
    descriptions: [
      'Diseñada para adaptarse a tu estilo de vida y a tus planes futuros de expansión, con un total de 110 m2, esta casa ofrece una combinación ideal de funcionalidad y confort, con cada espacio cuidadosamente diseñado para maximizar su utilidad y brindarte el máximo bienestar.',
      'Con una integración perfecta entre la cocina, el comedor y la sala de estar, este espacio abierto te brinda la libertad de movimiento mientras disfrutas de todo el confort. Además, cuenta con generosos espacios de almacenamiento en toda la casa.',
      'El dormitorio principal y el baño principal te brindan comodidad y amplitud, mientras que un espacio de escritorio estratégicamente ubicado está preparado para transformarse en una escalera que conectará con la planta alta cuando decidas expandirte.',
      'Desde la sala de estar, puedes acceder a una galería techada a través de una puerta balcón, creando un entorno perfecto para disfrutar del aire libre y conectar con el jardín.',
      'En la planta alta, encontrarás dos dormitorios adicionales y otro baño, lo que te proporciona aún más espacio para acomodar a tu familia o invitados.',
      'Aberturas con sistema DVH para maximizar la eficiencia energética, aprovechando al máximo las propiedades del hormigón celular.',
    ],
    images: [
      '/images/models/tehobroma/01.png',
      '/images/models/tehobroma/02.png',
      '/images/models/tehobroma/03.png',
      '/images/models/tehobroma/04.png',
      '/images/models/tehobroma/05.png',
      '/images/models/tehobroma/06.png',
    ]
  }
  const dinizia = {
    title: 'Casa Dinizia',
    descriptions: [
      'Casa especialmente diseñada para terrenos en esquina, donde la fachada principal y la conexión con la cochera son los elementos destacados. Con un diseño de doble altura, esta vivienda brinda una sensación de amplitud y confort desde el momento en que se atraviesa la puerta principal.',
      'Al ingresar, te dará la bienvenida un espacio integrado de sala y comedor, que ofrece la combinación perfecta de privacidad y comodidad. ',
      'La cocina, está estratégicamente ubicada para un fácil acceso desde cualquier punto del hogar. Pasando a un área más privada, encontrarás un baño y una habitación que puede adaptarse como dormitorio, sala de juegos o estudio/trabajo.',
      'La cochera, integrada con una galería techada, no solo brinda espacio para tus vehículos, sino que también ofrece una vista espectacular hacia el jardín desde el interior de la casa. ',
      'Con acceso desde la sala-comedor y la cocina, la galería se convierte en el lugar perfecto para relajarse y disfrutar del aire libre.',
      'En la planta alta, dos dormitorios adicionales y otro baño ofrecen la privacidad que tu familia necesita para descansar y recargar energías. Además, todas las aberturas están equipadas con DVH para maximizar la eficiencia energética, aprovechando al máximo las propiedades del hormigón celular.',
    ],
    images: [
      '/images/models/dinizia/01.png',
      '/images/models/dinizia/02.png',
      '/images/models/dinizia/03.png',
      '/images/models/dinizia/04.png',
      '/images/models/dinizia/05.png',
      '/images/models/dinizia/06.png',
    ]
  }
  
  const [modelSelect, setModelSelect] = useState(tehobroma)

  return (
    <>
      <h1 className='title-models'>MODELOS</h1>
      <div id='models' className=''>
        <ModalModels data={modelSelect} />
        <div className='h-100'>

          <div className='model-container model-container-t'>

            <Carousel id={'carouselTehobroma'} images={tehobroma.images.slice(0, 2)} buttons={false} />
            <div className='view-more-container pt-4'>
              <div>Casa Bromelia</div>
              <p>Diseñada para adaptarse a tu estilo de vida y a tus planes futuros de expansión, con un total de 110 m2, esta casa ofrece una combinación ideal de funcionalidad y confort, con cada espacio cuidadosamente diseñado para maximizar su utilidad y brindarte el máximo bienestar.</p>
              <button type="button" data-bs-toggle="modal" data-bs-target="#modal-models" onClick={() => setModelSelect(tehobroma)}>VER MÁS</button>
            </div>

            <div className="accordion-models accordion accordion-flush" id="accordionTehobroma">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-tehobroma">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-tehobroma" aria-expanded="false" aria-controls="flush-collapse-tehobroma">
                  Casa Bromelia
                  </button>
                </h2>
                <div id="flush-collapse-tehobroma" className="accordion-collapse collapse" aria-labelledby="flush-tehobroma" data-bs-parent="#accordionTehobroma">
                  <div className="accordion-body">
                    {
                      tehobroma.descriptions.map((description, index) => (
                        <p key={index}>{description}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='model-container model-container-d'>
            <div className='view-more-container' >
              <div>Casa Dinizia</div>
              <p>Casa especialmente diseñada para terrenos en esquina, donde la fachada principal y la conexión con la cochera son los elementos destacados. Con un diseño de doble altura, esta vivienda brinda una sensación de amplitud y confort desde el momento en que se atraviesa la puerta principal.</p>
              <button type="button" data-bs-toggle="modal" data-bs-target="#modal-models" onClick={() => setModelSelect(dinizia)}>VER MÁS</button>
            </div>

            <div className="accordion-models accordion accordion-flush" id="accordionDinizia">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-dinizia">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-dinizia" aria-expanded="false" aria-controls="flush-collapse-dinizia">
                  Casa Dinizia
                  </button>
                </h2>
                <div id="flush-collapse-dinizia" className="accordion-collapse collapse" aria-labelledby="flush-dinizia" data-bs-parent="#accordionDinizia">
                  <div className="accordion-body">
                    {
                      dinizia.descriptions.map((description, index) => (
                        <p key={index}>{description}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <Carousel id={'carouselDinizia'} images={dinizia.images.slice(0, 2)} buttons={false} />
          </div>
        </div>
      </div>
    </>
  )
}
