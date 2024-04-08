import React, { useState } from 'react'

export default function Characteristics() {

  const characteristics = [
    {
      title: 'RAPIDEZ',
      descriptions: [
        'Tu obra terminada en 3 meses, lista para que vivas en ella..',
        'La construcción en serie e industrializada que realizamos en fábrica, reduce significativamente el tiempo de desarrollo de la construcción in situ.',
        'No existen los retrasos habituales de las obras en construcción.',
      ],
      icon1: '/icons/characteristics/1-rapidez-blanco.png',
      icon2: '/icons/characteristics/1-rapidez-azul.png',
      color: 'white',
      background: '#172A49'
    },
    {
      title: 'AISLAMIENTO TERMOACÚSTICO DE ÚLTIMA GENERACIÓN',
      descriptions: [
        'Garantizamos interiores confortables, gran eficiencia energética reduciendo así los costos de calefacción y refrigeración.'
      ],
      icon1: '/icons/characteristics/2-aislamiento-azul.png',
      icon2: '/icons/characteristics/2-aislamiento-azul.png',
      color: '#172A49',
      background: '#F2CA99'
    },
    {
      title: 'IMPERMEABILIDAD',
      descriptions: [
        'La estructura molecular de nuestros muros está diseñada para prevenir la infiltración de agua, evitando así la transmisión de humedad por capilaridad o impregnación.',
        'Implica que no hay necesidad de aplicar revoques impermeables.'
      ],
      icon1: '/icons/characteristics/3-impermeabilidad-azul.png',
      icon2: '/icons/characteristics/3-impermeabilidad-azul.png',
      color: '#172A49',
      background: '#94B8C4'
    },
    {
      title: 'RESISTENCIA AL FUEGO',
      descriptions: [
        'Nuestros muros de hormigón celular resisten el fuego directo, pudiendo utilizarse como pared de fuego. Son auto-extinguibles, químicamente inertes y no tóxicos, siendo esta una de las tantas características que dotan de superioridad a nuestro sistema constructivo. '
      ],
      icon1: '/icons/characteristics/4-fuego-blanco.png',
      icon2: '/icons/characteristics/4-fuego-azul.png',
      color: 'white',
      background: '#172A49'
    },
    {
      title: 'LIBRE DE PLAGAS',
      descriptions: [
        'El hormigón celular con el que están fabricados nuestros muros, es un material inorgánico por lo que no favorece la formación de plagas y además, tiene alta resistencia a hongos, insectos y termitas.',
      ],
      icon1: '/icons/characteristics/5-plagas-azul.png',
      icon2: '/icons/characteristics/5-plagas-azul.png',
      color: '#172A49',
      background: '#F2CA99'
    },
    {
      title: 'OBRA LIMPIA Y CERO DESPERDICIOS',
      descriptions: [
        'Al ser un proceso industrializado, fundamentado en un desarrollo de ingeniería de detalle, no hay desechos ni desperdicios de obra. Entorno limpio y eficiente.'
      ],
      icon1: '/icons/characteristics/6-desperdicios-azul.png',
      icon2: '/icons/characteristics/6-desperdicios-azul.png',
      color: '#172A49',
      background: '#94B8C4'
    },
    {
      title: 'ESTRUCTURA RESISTENTE ANTE SISMOS',
      descriptions: [
        'Sistema apto para instalarse en zonas clasificadas con riesgo sísmico.'
      ],
      icon1: '/icons/characteristics/7-resistente-blanco.png',
      icon2: '/icons/characteristics/7-resistente-azul.png',
      color: 'white',
      background: '#172A49'
    },
    {
      title: 'VERSATILIDAD CONSTRUCTIVA',
      descriptions: [
        'Sistema constructivo adaptable a todo tipo de proyectos y necesidades del cliente.',
        'Soluciones flexibles y personalizadas en diferentes escalas y contextos.',
        'Amplia variedad de acabados y revestimientos para satisfacer preferencias individuales.',
      ],
      icon1: '/icons/characteristics/8-versatilidad-azul.png',
      icon2: '/icons/characteristics/8-versatilidad-azul.png',
      color: '#172A49',
      background: '#F2CA99'
    },
    {
      title: 'PROCESO SOSTENIBLE',
      descriptions: [
        'En nuestro proceso, adoptamos una mentalidad sostenible en todo el ciclo productivo, donde los desperdicios se reutilizan y tenemos un fuerte compromiso con la conciencia ambiental.'
      ],
      icon1: '/icons/characteristics/9-proceso-sostenible-azul.png',
      icon2: '/icons/characteristics/9-proceso-sostenible-azul.png',
      color: '#172A49',
      background: '#94B8C4'
    },
    {
      title: 'ELIMINACIÓN DE REVOQUES',
      descriptions: [
        'Tecnología de punta aplicada en la fabricación de nuestros muros y estrictos controles de calidad al momento del montaje de los mismos en el terreno de obra.',
        'No hay necesidad de revoques gruesos o finos, lo que permite aplicar directamente el revestimiento elegido por el cliente o simplemente una fina capa de pintura aportando color al acabado del muro',
        'Esta característica distintiva no sólo agiliza significativamente el proceso constructivo, ahorra tiempo y recursos sino que también garantiza un acabado impecable que supera los estándares convencionales de los sistemas constructivos actuales.',
      ],
      icon1: '/icons/characteristics/10-revoques-blanco.png',
      icon2: '/icons/characteristics/10-revoques-blanco.png',
      color: 'white',
      background: '#172A49'
    },
    {
      title: 'REDUCCIÓN DEL PESO MUERTO',
      descriptions: [
        'Debido a la ligereza de nuestros muros de hormigón celular, la carga muerta considerada en el cálculo estructural es significativamente menor, lo que resulta en fundaciones y estructuras de menor porte y volumen. Esto no solo reduce costos, sino que también acelera el proceso de construcción.',
        'Una de las características destacadas del hormigón celular es su ligereza, es un 65% más liviano que los materiales tradicionales.',
      ],
      icon1: '/icons/characteristics/11-reduccion-azul.png',
      icon2: '/icons/characteristics/11-reduccion-azul.png',
      color: '#172A49',
      background: '#F2CA99'
    },
    {
      title: 'INSTALACIONES INTEGRADAS',
      descriptions: [
        'Las instalaciones, como agua, gas natural, electricidad y desagües, son canalizadas en el muro dentro de nuestra planta de producción, eliminando la necesidad de hacerlas en obra.',
      ],
      icon1: '/icons/characteristics/12-instalaciones-azul.png',
      icon2: '/icons/characteristics/12-instalaciones-azul.png',
      color: '#172A49',
      background: '#94B8C4'
    },
    {
      title: 'SOLUCIÓN INTEGRAL PARA EL CLIENTE',
      descriptions: ['En nuestra empresa, garantizamos a nuestros clientes un proyecto completado rápidamente, con la mejor calidad y eficiencia, sin costos adicionales ni malestares. Además de llevar a cabo su proyecto, ofrecemos la opción de elegir entre modelos estandarizados para ahorrar tiempo y dinero, o trabajar en colaboración con su propio arquitecto/a para satisfacer sus necesidades específicas.'],
      icon1: '/icons/characteristics/13-solucion-integral-blanco.png',
      icon2: '/icons/characteristics/13-solucion-integral-azul.png',
      color: 'white',
      background: '#172A49'
    },
    {
      title: 'SIN COSTOS ADICIONALES',
      descriptions: [
        'Transparencia total y tranquilidad financiera. Te garantizamos que no habrá costos ocultos ni adicionales. Nos comprometemos a brindarte una experiencia de construcción sin complicaciones.'
      ],
      icon1: '/icons/characteristics/14-sin-costos-azul.png',
      icon2: '/icons/characteristics/14-sin-costos-azul.png',
      color: '#172A49',
      background: '#F2CA99'
    },
  ]

  const [itemSelected, setItemSelected] = useState(characteristics[0])



  return (
    <div className='characteristics-container'>
      <div className='row-container'>

        <div className='box-cards-container'>
          {
            characteristics.map((item, index) => (

              <div onClick={() => setItemSelected(item)} key={index} className="box-card">
                <div style={{ backgroundColor: item.background }} className="bg-card">
                </div>

                <div className="box-content">
                  <img className='img-card' src={item.icon1} alt="" />
                  <div style={{ color: item.color }} className='title-card'>{item.title}</div>
                </div>
              </div>

            ))
          }

        </div>

        <div className='w-100 ps-5'>
          <h3 className=''>CARACTERÍSTICAS <br /> CLAVES</h3>
          <hr />
          <h4>{itemSelected.title}</h4>
          {
            itemSelected.descriptions.map((description, index) => (
              <p className='text-description' key={index}>
                {description}
              </p>
            ))
          }
        </div>

      </div>
    </div>
  )
}
