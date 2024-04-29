import React from 'react'

export default function Contact() {




  return (
    <div id='contact' className='row contact-container'>
      <div className='col-12 col-lg-6 form-container'>
        <form className='form-contact' action="">
          <input placeholder='NOMBRE' type="text" />
          <input placeholder='E-MAIL' type="email" />
          <input placeholder='CELULAR' type="number" />
          <textarea placeholder='MENSAJE'></textarea>
          <button onClick={(e) => e.preventDefault()} className='btn-contact'>ENVIAR</button>
        </form>
      </div>
      <div className='col-12 col-lg-6 ps-0 ps-lg-5'>
        <h1>CONTACTO</h1>

        <div className='contact-info'>
          <img width={'30px'} src="/img/icons/contact-location.png" alt="Amazonía Construcción Industrializada" />
          <a target='_blanc' href="https://www.google.com/maps/dir//Av.+San+Lorenzo+2669,+Cap.+Berm%C3%BAdez,+Santa+Fe/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x95b650f7aee0b7f9:0x701fb4db64baa2df?sa=X&ved=1t:707&ictx=111">
            Avenida San Lorenzo 2669, S2154 Capitán Bermúdez, Santa Fe, Argentina
          </a>
        </div>
        <div className='contact-info'>
          <img width={'30px'} src="/img/icons/contact-tel.png" alt="Amazonía Construcción Industrializada" />
          <a target='_blanc' href="https://wa.me/3415217974">
            +54 9 3415 21-7974
          </a>
        </div>
        <div className='contact-info'>
          <img width={'30px'} src="/img/icons/contact-email.png" alt="Amazonía Construcción Industrializada" />
          <a href="mailto:comercial@amzdesarrollos.com">
            comercial@amzdesarrollos.com
          </a>
        </div>
        <div className='contact-info'>
          <img width={'30px'} src="/img/icons/contact-web.png" alt="Amazonía Construcción Industrializada" />
          <a target='_blanc' href="http://www.amz-d.com/">
            www.amz-d.coms
          </a>

        </div>

        <iframe title='AMZ Desarrollos Ubicación' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.461830346874!2d-60.7195294!3d-32.8065262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b650f7aee0b7f9%3A0x701fb4db64baa2df!2sAv.%20San%20Lorenzo%202669%2C%20Cap.%20Berm%C3%BAdez%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1712723921908!5m2!1ses!2sar" width="100%" height={"300px"} style={{ border: 0 }}></iframe>

      </div>
    </div>
  )
}
