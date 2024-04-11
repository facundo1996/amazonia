import React from 'react'

export default function Commercialization() {
	return (
		<div id='commercialization' className='commercialization-container'>
			<h3 className='title-commercialization'>DISPONEMOS DE <b>OPCIONES DE CONTRATACIÓN FLEXIBLES</b> ACORDE A SU NECESIDAD Y POSIBILIDADES DE CUALQUIER TIPO DE PROYECTO</h3>

			<div className='commercialization-info-container'>
				<div className='box-1'>
					<div className='title-construction-system'>CONSTRUIMOS EN TU TERRENO CON NUESTRO SISTEMA CONSTRUCTIVO</div>
					<div>
						<div className='d-flex mb-2 mb-md-4'>
							<div className='number'>1</div>
							<div className='box-availability'>
								<div className='availability-info'>Obra estructural en</div>
								<div className='availability-time'>1 MES.</div>
							</div>
						</div>
						<div className='d-flex'>
							<div className='number'>2</div>
							<div className='box-availability'>
								<div className='availability-info'>Vivienda llave en mano</div>
								<div className='availability-time'>3 MESES.</div>
							</div>
						</div>
					</div>
				</div>

				<div className='box-2'>

					<div className='box-commercialization-info'>
						<div className='title-list'>ELEGÍ LA MODALIDAD QUE MÁS SE ADAPTE A TU PROYECTO</div>
						<ul className='list-modality'>
							<li>
								<b>PROYECTO COMPLETO CON NUESTRO EQUIPO DE ARQUITECTURA E INGENIERÍA.</b>
								<p>Diseñamos su proyecto a medida, teniendo en cuenta sus preferencias. Nuestro compromiso: entregar las llaves de su vivienda en solo 3 meses, para que pueda disfrutarla sin demoras.</p>
							</li>
							<li>
								<b>MODELOS ESTANDARIZADOS, GARANTIZANDO RAPIDEZ Y PRECIOS COMPETITIVOS.</b>
								<p>Disponemos de modelos de viviendas que han sido cuidadosamente analizados en términos de diseño arquitectónico y aplicación de ingeniería, lo que garantiza un proceso más rápido y un precio más competitivo. </p>
							</li>
							<li>
								<b>TRABAJAR CON EL PROYECTO DE SU PROPIO ARQUITECTO/A.</b>
								<p>Alternativamente, damos la posibilidad al cliente de llevar a cabo el proyecto diseñado por su arquitecto, adaptándolo a nuestro sistema constructivo.</p>
							</li>
						</ul>
					</div>

				</div>

			</div>
		</div>
	)
}
