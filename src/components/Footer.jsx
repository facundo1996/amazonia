import React from 'react'

export default function Footer() {

  function scrollToComponent(e, id){
    e.preventDefault()
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className='footer-container row'>
      <div className='d-flex flex-column justify-content-center align-items-center col-6 b-r-2'>
        <img className='logo-footer' src="/icons/logo-completo.png" alt="Sistema constructivo" />
        <div className='text-md c-light mt-5'>LÍDERES EN CONSTRUCCIÓN INDUSTRIALIZADA</div>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-start col-6 social-footer'>
        <a href='' onClick={(e) => scrollToComponent(e, 'homepage')}>HOME </a>
        <a href='' onClick={(e) => scrollToComponent(e, 'system')}>SISTEMA CONSTRUCTIVO AMZ </a>
        <a href='' onClick={(e) => scrollToComponent(e, 'commercialization')}>COMERCIALIZACIÓN </a>
        <a href='' onClick={(e) => scrollToComponent(e, 'models')}>MODELOS </a>
        <a href='' onClick={(e) => scrollToComponent(e, 'company')}>EMPRESA </a>
        <a href='' onClick={(e) => scrollToComponent(e, 'contact')}>CONTACTO</a>
      </div>
    </div>
  )
}
