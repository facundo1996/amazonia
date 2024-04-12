import React, { useState, useEffect } from 'react'

export default function Characteristics() {

  const characteristics = [
    {
      title: 'RAPIDEZ',
      descriptions: [
        'Tu obra terminada en 3 meses, lista para que vivas en ella..',
        'La construcción en serie e industrializada que realizamos en fábrica, reduce significativamente el tiempo de desarrollo de la construcción in situ.',
        'No existen los retrasos habituales de las obras en construcción.',
      ],
      btn1: '/icons/btn/1-rapidez.png',
      btn2: '/icons/btn/1-rapidez-select.png',
      icon2: '/icons/characteristics/1-rapidez-azul.png',
      color: 'white',
      background: '#172A49',
      id: 1,
    },
    {
      title: 'AISLAMIENTO TERMOACÚSTICO DE ÚLTIMA GENERACIÓN',
      descriptions: [
        'Garantizamos interiores confortables, gran eficiencia energética reduciendo así los costos de calefacción y refrigeración.'
      ],
      btn1: '/icons/btn/2-aislamiento.png',
      btn2: '/icons/btn/2-aislamiento-select.png',
      icon2: '/icons/characteristics/2-aislamiento-azul.png',
      color: '#172A49',
      background: '#F2CA99',
      id: 2,
    },
    {
      title: 'IMPERMEABILIDAD',
      descriptions: [
        'La estructura molecular de nuestros muros está diseñada para prevenir la infiltración de agua, evitando así la transmisión de humedad por capilaridad o impregnación.',
        'Implica que no hay necesidad de aplicar revoques impermeables.'
      ],
      btn1: '/icons/btn/3-impermeabilidad.png',
      btn2: '/icons/btn/3-impermeabilidad-select.png',
      icon2: '/icons/characteristics/3-impermeabilidad-azul.png',
      color: '#172A49',
      background: '#94B8C4',
      id: 3,
    },
    {
      title: 'RESISTENCIA AL FUEGO',
      descriptions: [
        'Nuestros muros de hormigón celular resisten el fuego directo, pudiendo utilizarse como pared de fuego. Son auto-extinguibles, químicamente inertes y no tóxicos, siendo esta una de las tantas características que dotan de superioridad a nuestro sistema constructivo. '
      ],
      btn1: '/icons/btn/4-fuego.png',
      btn2: '/icons/btn/4-fuego-select.png',
      icon2: '/icons/characteristics/4-fuego-azul.png',
      color: 'white',
      background: '#172A49',
      id: 4,
    },
    {
      title: 'LIBRE DE PLAGAS',
      descriptions: [
        'El hormigón celular con el que están fabricados nuestros muros, es un material inorgánico por lo que no favorece la formación de plagas y además, tiene alta resistencia a hongos, insectos y termitas.',
      ],
      btn1: '/icons/btn/5-plagas.png',
      btn2: '/icons/btn/5-plagas-select.png',
      icon2: '/icons/characteristics/5-plagas-azul.png',
      color: '#172A49',
      background: '#F2CA99',
      id: 5,
    },
    {
      title: 'OBRA LIMPIA Y CERO DESPERDICIOS',
      descriptions: [
        'Al ser un proceso industrializado, fundamentado en un desarrollo de ingeniería de detalle, no hay desechos ni desperdicios de obra. Entorno limpio y eficiente.'
      ],
      btn1: '/icons/btn/6-desperdicios.png',
      btn2: '/icons/btn/6-desperdicios-select.png',
      icon2: '/icons/characteristics/6-desperdicios-azul.png',
      color: '#172A49',
      background: '#94B8C4',
      id: 6,
    },
    {
      title: 'ESTRUCTURA RESISTENTE ANTE SISMOS',
      descriptions: [
        'Sistema apto para instalarse en zonas clasificadas con riesgo sísmico.'
      ],
      btn1: '/icons/btn/7-resistente.png',
      btn2: '/icons/btn/7-resistente-select.png',
      icon2: '/icons/characteristics/7-resistente-azul.png',
      color: 'white',
      background: '#172A49',
      id: 7,
    },
    {
      title: 'VERSATILIDAD CONSTRUCTIVA',
      descriptions: [
        'Sistema constructivo adaptable a todo tipo de proyectos y necesidades del cliente.',
        'Soluciones flexibles y personalizadas en diferentes escalas y contextos.',
        'Amplia variedad de acabados y revestimientos para satisfacer preferencias individuales.',
      ],
      btn1: '/icons/btn/8-versatilidad.png',
      btn2: '/icons/btn/8-versatilidad-select.png',
      icon2: '/icons/characteristics/8-versatilidad-azul.png',
      color: '#172A49',
      background: '#F2CA99',
      id: 8,
    },
    {
      title: 'PROCESO SOSTENIBLE',
      descriptions: [
        'En nuestro proceso, adoptamos una mentalidad sostenible en todo el ciclo productivo, donde los desperdicios se reutilizan y tenemos un fuerte compromiso con la conciencia ambiental.'
      ],
      btn1: '/icons/btn/9-proceso-sostenible.png',
      btn2: '/icons/btn/9-proceso-sostenible-select.png',
      icon2: '/icons/characteristics/9-proceso-sostenible-azul.png',
      color: '#172A49',
      background: '#94B8C4',
      id: 9,
    },
    {
      title: 'ELIMINACIÓN DE REVOQUES',
      descriptions: [
        'Tecnología de punta aplicada en la fabricación de nuestros muros y estrictos controles de calidad al momento del montaje de los mismos en el terreno de obra.',
        'No hay necesidad de revoques gruesos o finos, lo que permite aplicar directamente el revestimiento elegido por el cliente o simplemente una fina capa de pintura aportando color al acabado del muro',
        'Esta característica distintiva no sólo agiliza significativamente el proceso constructivo, ahorra tiempo y recursos sino que también garantiza un acabado impecable que supera los estándares convencionales de los sistemas constructivos actuales.',
      ],
      btn1: '/icons/btn/10-revoques.png',
      btn2: '/icons/btn/10-revoques-select.png',
      icon2: '/icons/characteristics/10-revoques-azul.png',
      color: 'white',
      background: '#172A49',
      id: 10,
    },
    {
      title: 'REDUCCIÓN DEL PESO MUERTO',
      descriptions: [
        'Debido a la ligereza de nuestros muros de hormigón celular, la carga muerta considerada en el cálculo estructural es significativamente menor, lo que resulta en fundaciones y estructuras de menor porte y volumen. Esto no solo reduce costos, sino que también acelera el proceso de construcción.',
        'Una de las características destacadas del hormigón celular es su ligereza, es un 65% más liviano que los materiales tradicionales.',
      ],
      btn1: '/icons/btn/11-reduccion.png',
      btn2: '/icons/btn/11-reduccion-select.png',
      icon2: '/icons/characteristics/11-reduccion-azul.png',
      color: '#172A49',
      background: '#F2CA99',
      id: 11,
    },
    {
      title: 'INSTALACIONES INTEGRADAS',
      descriptions: [
        'Las instalaciones, como agua, gas natural, electricidad y desagües, son canalizadas en el muro dentro de nuestra planta de producción, eliminando la necesidad de hacerlas en obra.',
      ],
      btn1: '/icons/btn/12-instalaciones.png',
      btn2: '/icons/btn/12-instalaciones-select.png',
      icon2: '/icons/characteristics/12-instalaciones-azul.png',
      color: '#172A49',
      background: '#94B8C4',
      id: 12,
    },
    {
      title: 'SOLUCIÓN INTEGRAL PARA EL CLIENTE',
      descriptions: ['En nuestra empresa, garantizamos a nuestros clientes un proyecto completado rápidamente, con la mejor calidad y eficiencia, sin costos adicionales ni malestares. Además de llevar a cabo su proyecto, ofrecemos la opción de elegir entre modelos estandarizados para ahorrar tiempo y dinero, o trabajar en colaboración con su propio arquitecto/a para satisfacer sus necesidades específicas.'],
      btn1: '/icons/btn/13-solucion-integral.png',
      btn2: '/icons/btn/13-solucion-integral-select.png',
      icon2: '/icons/characteristics/13-solucion-integral-azul.png',
      color: 'white',
      background: '#172A49',
      id: 13,
    },
    {
      title: 'SIN COSTOS ADICIONALES',
      descriptions: [
        'Transparencia total y tranquilidad financiera. Te garantizamos que no habrá costos ocultos ni adicionales. Nos comprometemos a brindarte una experiencia de construcción sin complicaciones.'
      ],
      btn1: '/icons/btn/14-sin-costos.png',
      btn2: '/icons/btn/14-sin-costos-select.png',
      icon2: '/icons/characteristics/14-sin-costos-azul.png',
      color: '#172A49',
      background: '#F2CA99',
      id: 14,
    },
  ]

  const [itemSelected, setItemSelected] = useState(characteristics[0])
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };
    handleResize()

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);


  return (
    <div className='characteristics-container'>


      <div className="accordion" id="accordionCharacteristics">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              CARACTERÍSTICAS CLAVES
            </button>
          </h2>
          <div id="collapseOne" className={isMobile ?"accordion-collapse collapse" :"accordion-collapse collapse show"} aria-labelledby="headingOne" data-bs-parent="#accordionCharacteristics">

            <div className='row-container'>
              <div className='box-cards-container'>
                {
                  characteristics.map((item, index) => (

                    <div key={index} className="box-card">
                      <img onClick={() => setItemSelected(item)} src={itemSelected.id === item.id ? item.btn2 : item.btn1} alt="" />
                    </div>

                  ))
                }
              </div>

              <div className='w-100 ps-0 ps-xxl-5 d-flex flex-column justify-content-between mt-5 mt-xxl-0'>
                <div>
                  <h3 className='d-none d-xxl-flex'>CARACTERÍSTICAS <br /> CLAVES</h3>
                  <hr className='d-none d-xxl-flex' />
                  <h4>{itemSelected.title}</h4>
                  {
                    itemSelected.descriptions.map((description, index) => (
                      <p className='text-description' key={index}>
                        {description}
                      </p>
                    ))
                  }
                </div>
                <div className='image-container'>
                  <img className='c-image' src={itemSelected.icon2} alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}
