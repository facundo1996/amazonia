import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import ModalModels from './ModalModels'

export default function Models() {

  const [modelo1, setModelo1] = useState({});
  const [modelo2, setModelo2] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/models.json');
      const jsonData = await response.json();
      setModelo1(jsonData.modelo1);
      setModelo2(jsonData.modelo2);
    }

    fetchData();
  }, []);


  const [modelSelect, setModelSelect] = useState(modelo1)

  return (
    <>
      <h1 id='models-title' className='title-models'>MODELOS</h1>
      <div id='models' className=''>
        <ModalModels data={modelSelect} />
        <div className='h-100'>

          <div className='model-container model-container-t'>
            {
              modelo1 && modelo1.imagenes && <Carousel id={'carouselTehobroma'} images={modelo1?.imagenes.slice(0, 2)} buttons={false} />
            }
            <div className='view-more-container pt-4'>
              <div>{modelo1.titulo}</div>
              <p>{modelo1.textoCorto}</p>
              <button type="button" data-bs-toggle="modal" data-bs-target="#modal-models" onClick={() => setModelSelect(modelo1)}>VER MÁS</button>
            </div>

            <div className="accordion-models accordion accordion-flush" id="accordionTehobroma">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-tehobroma">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-tehobroma" aria-expanded="false" aria-controls="flush-collapse-tehobroma">
                    {modelo1.titulo}
                  </button>
                </h2>
                <div id="flush-collapse-tehobroma" className="accordion-collapse collapse" aria-labelledby="flush-tehobroma" data-bs-parent="#accordionTehobroma">
                  <div className="accordion-body">
                    {
                      modelo1.textoLargo && (
                        modelo1.textoLargo.map((description, index) => (
                          <p key={index}>{description}</p>
                        ))
                      )
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='model-container model-container-d'>
            <div className='view-more-container' >
              <div>{modelo2.titulo}</div>
              <p>{modelo2.textoCorto}</p>
              <button type="button" data-bs-toggle="modal" data-bs-target="#modal-models" onClick={() => setModelSelect(modelo2)}>VER MÁS</button>
            </div>

            <div className="accordion-models accordion accordion-flush" id="accordionDinizia">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-dinizia">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-dinizia" aria-expanded="false" aria-controls="flush-collapse-dinizia">
                    <div>{modelo2.titulo}</div>
                  </button>
                </h2>
                <div id="flush-collapse-dinizia" className="accordion-collapse collapse" aria-labelledby="flush-dinizia" data-bs-parent="#accordionDinizia">
                  <div className="accordion-body">
                    {
                      modelo1.textoLargo && (
                        modelo1.textoLargo.map((description, index) => (
                          <p key={index}>{description}</p>
                        ))
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
            {
              modelo2 && modelo2.imagenes && <Carousel id={'carouselDinizia'} images={modelo2?.imagenes.slice(0, 2)} buttons={false} />
            }
          </div>
        </div>
      </div>
    </>
  )
}
