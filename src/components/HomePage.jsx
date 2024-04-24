import React from 'react'

export default function HomePage() {

  const redes = [
    {
      icon: '/icons/f-white.png',
      iconblue: '/icons/f-blue.png',
      url: 'https://www.google.com/'
    },
    {
      icon: '/icons/ig-white.png',
      iconblue: '/icons/ig-blue.png',
      url: 'https://www.google.com/'
    },
    {
      icon: '/icons/in-white.png',
      iconblue: '/icons/in-blue.png',
      url: 'https://www.google.com/'
    },
  ]

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

  return (
    <div id='homepage' className='homepage-container' aria-label="Sistema constructivo">
      <div className='video-content'>
        <video className='d-none d-xl-flex' autoPlay loop playsInline muted src="/videos/video-web.mp4"></video>
        <video className='d-flex d-xl-none' autoPlay loop playsInline muted src="/videos/video-mobile.mp4"></video>

        <div className='d-flex d-xl-none flex-column justify-content-center align-items-center social-homepage'>
          <a href='/' onClick={(e) => scrollToComponent(e, 'homepage')}>HOME </a>
          <a href='/' onClick={(e) => scrollToComponent(e, 'system')}>SISTEMA CONSTRUCTIVO AMZ </a>
          <a href='/' onClick={(e) => scrollToComponent(e, 'commercialization')}>COMERCIALIZACIÓN </a>
          <a href='/' onClick={(e) => scrollToComponent(e, 'models')}>MODELOS </a>
          <a href='/' onClick={(e) => scrollToComponent(e, 'company')}>EMPRESA </a>
          <a href='/' onClick={(e) => scrollToComponent(e, 'contact')}>CONTACTO</a>
          <div className='social-container mt-5'>
            {
              redes.map((social, index) => (
                <a key={index} className='d-flex justify-content-center align-items-center' target='_blanc' href={social.url}>
                  <img className={'icon-social-white'} src={social.icon} alt="Amazonía Construcción Industrializada" />
                </a>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}
