import React from 'react'

export default function Differences() {
	const items = [
		{
			id: 1,
			title: 'EFICIENCIA PRODUCTIVA',
			text: 'Sistema constructivo diseñado para optimizar la ejecución de proyectos, reduciendo significativamente los tiempos de obra en comparación con otros métodos constructivos.',
		},
		{
			id: 2,
			title: 'ECOSOSTENIBILIDAD',
			text: 'Los materiales utilizados son seleccionados con criterios de sostenibilidad ambiental, minimizando el impacto ecológico de la construcción. Además, la eficiencia energética y la reducción de residuos son aspectos clave del sistema constructivo, contribuyendo así a la preservación del medio ambiente.',
		},
		{
			id: 3,
			title: 'SOLIDEZ Y DURABILIDAD',
			text: 'Nuestros muros están conformados 100% por hormigón celular, lo que representa resistencia estructural y durabilidad a largo plazo, garantizando la estabilidad y seguridad de las construcciones. Esta solidez se combina con la mayor capacidad de aislamiento térmico y acústico, proporcionando un ambiente interior confortable y saludable.',
		},
		{
			id: 4,
			title: 'FLEXIBILIDAD Y VERSATILIDAD',
			text: 'El sistema constructivo modular permite una gran flexibilidad en el diseño y la configuración de las estructuras, adaptándose a las necesidades específicas de cada proyecto. El sistema ofrece una solución versátil para una amplia gama de aplicaciones en el ámbito de la arquitectura y la construcción, desde viviendas unifamiliares, proyectos comerciales e infraestructura de todo tipo.'
		},
	]
	return (
		<div className='differences-container'>
			<div className='box-differences pe-5 pt-3 pt-xl-5'>
				<h1 className='mb-3 mt-3 p-title'>¡DESCUBRÍ LA DIFERENCIA!</h1>
				<div>
					{
						items.map((item, index) => (
							<div key={item.id} className={`d-flex mb-2 mb-sm-5 p-box-${item.id}`}>
								<div className='number'>{item.id}</div>
								<div>
									<div className='title-md'>{item.title}</div>
									<div className='text-md'>{item.text}</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}
