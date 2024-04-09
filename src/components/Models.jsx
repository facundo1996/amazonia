import React from 'react'

export default function Models() {


  const models = [
    {
      title: 'THEOBROMA ',
      descriptions: [
        'Diseñada para adaptarse a tu estilo de vida y a tus planes futuros de expansión, con un total de 110 m2, esta casa ofrece una combinación ideal de funcionalidad y confort, con cada espacio cuidadosamente diseñado para maximizar su utilidad y brindarte el máximo bienestar.',
        'Con una integración perfecta entre la cocina, el comedor y la sala de estar, este espacio abierto te brinda la libertad de movimiento mientras disfrutas de todo el confort. Además, cuenta con generosos espacios de almacenamiento en toda la casa.',
        'El dormitorio principal y el baño principal te brindan comodidad y amplitud, mientras que un espacio de escritorio estratégicamente ubicado está preparado para transformarse en una escalera que conectará con la planta alta cuando decidas expandirte.',
        'Desde la sala de estar, puedes acceder a una galería techada a través de una puerta balcón, creando un entorno perfecto para disfrutar del aire libre y conectar con el jardín.',
        'En la planta alta, encontrarás dos dormitorios adicionales y otro baño, lo que te proporciona aún más espacio para acomodar a tu familia o invitados.',
        'Aberturas con sistema DVH para maximizar la eficiencia energética, aprovechando al máximo las propiedades del hormigón celular.',
      ],
      image: '/videos/models-1.mp4'
    },
    {
      title: 'DINIZIA',
      descriptions: [
        'Casa especialmente diseñada para terrenos en esquina, donde la fachada principal y la conexión con la cochera son los elementos destacados. Con un diseño de doble altura, esta vivienda brinda una sensación de amplitud y confort desde el momento en que se atraviesa la puerta principal.',
        'Al ingresar, te dará la bienvenida un espacio integrado de sala y comedor, que ofrece la combinación perfecta de privacidad y comodidad. ',
        'La cocina, está estratégicamente ubicada para un fácil acceso desde cualquier punto del hogar. Pasando a un área más privada, encontrarás un baño y una habitación que puede adaptarse como dormitorio, sala de juegos o estudio/trabajo.',
        'La cochera, integrada con una galería techada, no solo brinda espacio para tus vehículos, sino que también ofrece una vista espectacular hacia el jardín desde el interior de la casa. ',
        'Con acceso desde la sala-comedor y la cocina, la galería se convierte en el lugar perfecto para relajarse y disfrutar del aire libre.',
        'En la planta alta, dos dormitorios adicionales y otro baño ofrecen la privacidad que tu familia necesita para descansar y recargar energías. Además, todas las aberturas están equipadas con DVH para maximizar la eficiencia energética, aprovechando al máximo las propiedades del hormigón celular.',
      ],
      image: '/videos/models-1.mp4'
    },
  ]
  return (
    <div className='pt-5'>
      <h1 className='title-models'>MODELOS</h1>
      <div>

        {
          models.map((model, index) => (
            <div className='model-container' key={index}>
              <video autoPlay loop playsInline muted src={model.image}></video>
              <div>
                <div className='title-model'>{model.title}</div>
                {
                  model.descriptions.map((description,index) => (
                    <p className='model-description' key={index}>{description}</p>
                  ))
                }
              </div>
            </div>

          ))
        }

      </div>

    </div>
  )
}
