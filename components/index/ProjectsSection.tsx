

// NextJS and react
import React from 'react';
import Image from 'next/image'

// Antd
import {
	Row,
	Col,
	Card,
	Carousel
} from 'antd';
const { Meta } = Card;

// Custom
import { theme } from '@/styles/theme'

const ProjectsSection = () => {

	const onChange = () => {
	}

	return (
		<>
			<section id="projects">
				<div className="project">
					<h3>Kiwi Peluditos</h3>
					<div className="image">
						<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />
					</div>
					<div className="description">
						Esta plataforma permite a sus usuarios registrar los datos de sus mascotas y obtener un código QR único según su perfil.
					</div>
				</div>

				<div className="project">
					<h3>BD Tgrado</h3>
					<div className="image">
						<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />
					</div>
					<div className="description">
						Esta plataforma fue desarrollada como trabajo en la universidad del Quindío, es una plataforma para la administración completa de trabajos de grado del programa Ingeniería Electrónica.
					</div>
				</div>

				<div className="project">
					<h3>Sintel</h3>
					<div className="image">
						<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />
					</div>
					<div className="description">
						Sintel es ubn software para el modelado y simulación de sistemas digitales, permite ver en tiempo real el comportamiento del circuito, además de exportar el modelo a códigos HDL como Verilog y VHDL.
					</div>
				</div>

				<div className="project">
					<h3>Microprocesador MIPS</h3>
					<div className="image">
						<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />
					</div>
					<div className="description">
						He modelado y simulado un microprocesador MIPS de 32 bits con pipeline, se le agregaron entradas y salidas al sistema, además de un código en ensamblador de ejemplo, el proyecto está desarrollado en Verilog.
					</div>
				</div>

				<div className="project">
					<h3>Stiirrigation</h3>
					<div className="image">
						<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />
					</div>
					<div className="description">
						Plataforma para el regado automático de plantaciones, mi trabajo fue la construcción del api y la plataforma de administración, además de una interfáz en python para una raspberry pi v3
					</div>
				</div>

			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 10px 20%;
						align-items: center;
					}

					.project{
						width: 90%;
						margin: auto;
					}
					.image{
						width: 40%;
					}
					img{
						width: 100%;
					}
				`}
			</style>
		</>
	)
}

export default React.memo(ProjectsSection)