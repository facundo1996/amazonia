import React, { useState, useEffect } from 'react';

function NavBar() {

  const redes = [
    {
      icon: '/icons/f-white.png',
      iconblue: '/icons/f-blue.png',
      url: 'https://www.facebook.com/'
    },
    {
      icon: '/icons/ig-white.png',
      iconblue: '/icons/ig-blue.png',
      url: 'https://www.instagram.com/amazonia_amz/'
    },
    {
      icon: '/icons/in-white.png',
      iconblue: '/icons/in-blue.png',
      url: 'https://www.linkedin.com/company/amazon%C3%ADa/'
    },
  ]
  const wspIcon = {
    iconBlue: 'icons/wsp-azul.png',
    iconWhite: 'icons/wsp-blanco.png',
    tel: '',
  }

  const [scrolled, setScrolled] = useState(false);
  const [scrolledTop, setScrolledTop] = useState(false);

  function scrollToComponent(e, id) {
    e.preventDefault()
    const element = document.getElementById(id);
    if (element) {
      const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: yCoordinate + -130,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if(window.scrollY > 100) {
        setScrolledTop(true)
      }else {
        setScrolledTop(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={scrolled ? 'navbar navbar-expand-xl bg-white' : 'navbar navbar-expand-xl bg-transparent'} >
      <div className="container-fluid">
        <a className="navbar-brand" href='/' onClick={(e) => scrollToComponent(e, 'homepage')}>
          <img className={scrolled ? 'amz-logo-navbar' : 'amz-logo-navbar-disabled'} src="/icons/amz-logo-blue.png" alt="Eficiencia energética" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">

          </span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className={scrolled ? 'navbar-nav color-blue' : 'navbar-nav color-white'}>
            <li className="nav-item">
              <a onClick={(e) => scrollToComponent(e, 'homepage')} className="nav-link b-r-2" href='/'>HOME</a>
            </li>
            <li className="nav-item">
              <a onClick={(e) => scrollToComponent(e, 'system')} className="nav-link b-r-2" href='/'>SISTEMA CONSTRUCTIVO AMZ</a>
            </li>
            <li className="nav-item">
              <a onClick={(e) => scrollToComponent(e, 'commercialization')} className="nav-link b-r-2" href='/'>COMERCIALIZACIÓN</a>
            </li>
            <li className="nav-item">
              <a onClick={(e) => scrollToComponent(e, 'models')} className="nav-link b-r-2" href='/'>MODELOS</a>
            </li>
            <li className="nav-item">
              <a onClick={(e) => scrollToComponent(e, 'company')} className="nav-link b-r-2" href='/'>EMPRESA</a>
            </li>
            <li className="nav-item">
              <a onClick={(e) => scrollToComponent(e, 'contact')} className="nav-link" href='/'>CONTACTO</a>
            </li>
          </ul>
          <div className='social-container mt-3 d-flex d-xl-none'>
            {
              redes.map((social, index) => (
                <a key={index} className='d-flex justify-content-center align-items-center' target='_blanc' href={social.url}>
                  {
                    scrolled
                      ? <img className={'icon-social-blue'} src={social.iconblue} alt="Construcción rápida" />
                      : <img className={'icon-social-white'} src={social.icon} alt="Construcción antisísmica" />
                  }
                </a>
              ))
            }
          </div>
        </div>
        <div className='social-container d-none d-xl-flex'>
          {
            redes.map((social, index) => (
              <a key={index} className='d-flex justify-content-center align-items-center' target='_blanc' href={social.url}>
                {
                  scrolled
                    ? <img className={'icon-social-blue'} src={social.iconblue} alt="Muros 100% hormigon celular" />
                    : <img className={'icon-social-white'} src={social.icon} alt="Eliminación de residuos de obra" />
                }
              </a>
            ))
          }
        </div>
      </div>
    </nav>
      <img onClick={() => window.open('https://wa.me/3415217974', '_blank')} src={scrolledTop ?wspIcon.iconBlue :wspIcon.iconWhite} className='wsp-icon' alt="Flexibilidad en el diseño" />
    </>
  )
}

export default NavBar