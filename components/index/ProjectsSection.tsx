

// NextJS and react
import React from 'react';
import Link from 'next/link'

// Antd
import {
	Space,
	Card,
	Divider,
	Button,
	Tag
} from 'antd';
const { Meta } = Card;

// Custom
import { theme } from '@/styles/theme'
import { GitlabFilled, LinkOutlined, ContactsFilled } from '@ant-design/icons';
import ImageCollection from '../ImageCollection';

const ProjectsSection = () => {

	const onChange = () => {
	}

	const imagesKiwi = [
		"/img/index/kiwipeluditos/img1.png",
		"/img/index/kiwipeluditos/img2.png",
		"/img/index/kiwipeluditos/img3.png",
		"/img/index/kiwipeluditos/img4.png"
	]
	const imagesTgrado = [
		"/img/index/bdtgrado/img1.png",
		"/img/index/bdtgrado/img2.png",
		"/img/index/bdtgrado/img3.png"
	]
	const imagesSintel = [
		"/img/index/sintel/img1.png",
		"/img/index/sintel/img2.png",
		"/img/index/sintel/img3.png",
		"/img/index/sintel/img4.png"
	]
	const imagesMIPS = [
		"/img/index/mips/img1.png",
		"/img/index/mips/img2.jpeg",
	]
	const imagesSTI = [
		"/img/index/sti/img1.png"
	]

	return (
		<>
			<section id="projects">
				<h3>My projects</h3>
				<Divider />
				<div className="project">					
					<div className="image">
						<ImageCollection images={imagesKiwi} />
						<div className="tags">
							<Tag>NextJS</Tag>
							<Tag>PostgreSQL</Tag>
							<Tag>Django</Tag>
							<Tag>FastAPI</Tag>
						</div>
					</div>
					<div className="description">
						<h3>Kiwi Peluditos</h3>
						<p>Esta plataforma permite a sus usuarios registrar los datos de sus mascotas y obtener un código QR único según su perfil.</p>
						<Divider />
						<Space>
							<Link href="https://kiwipeluditos.com">
								<a target="_blank">
									<Button icon={<LinkOutlined />} type="primary" ghost>Visit</Button>
								</a>
							</Link>
							<Link href="https://kiwipeluditos.com/ayuda">
								<a target="_blank">
									<Button icon={<ContactsFilled />} type="primary" ghost>Contact page</Button>
								</a>
							</Link>
						</Space>
					</div>
				</div>

				<div className="project">
					<div className="image image-right">
						<ImageCollection images={imagesTgrado} />
						<div className="tags">
							<Tag>MySQL</Tag>
							<Tag>Django</Tag>
						</div>
					</div>
					<div className="description description-right">
						<h3>BD Tgrado</h3>
						Esta plataforma fue desarrollada como trabajo en la universidad del Quindío, es una plataforma para la administración completa de trabajos de grado del programa Ingeniería Electrónica.
						<Divider />
						<Space>
							<Link href="https://kiwipeluditos.com">
								<a target="_blank">
									<Button icon={<LinkOutlined />} type="primary" ghost>Visit</Button>
								</a>
							</Link>
							<Button icon={<GitlabFilled />} type="primary" ghost>View Code</Button>
						</Space>
					</div>
				</div>

				<div className="project">
					<div className="image">
						<ImageCollection images={imagesSintel} />
						<div className="tags">
							<Tag>Python3</Tag>
							<Tag>QT6</Tag>
							<Tag>VHDL</Tag>
							<Tag>Verilog</Tag>
						</div>
					</div>
					<div className="description">
						<h3>Sintel</h3>
						Sintel es un software para el modelado y simulación de sistemas digitales, permite ver en tiempo real el comportamiento del circuito, además de exportar el modelo a códigos HDL como Verilog y VHDL.
						<Divider />
						<Space>
							<Link href="https://wilferciro.gitlab.io/sintel/">
								<a target="_blank">
									<Button icon={<LinkOutlined />} type="primary" ghost>Visit</Button>
								</a>
							</Link>
							<Link href="https://gitlab.com/WilferCiro/sintel">
								<a target="_blank">
									<Button icon={<GitlabFilled />} type="primary" ghost>View Code</Button>
								</a>
							</Link>
						</Space>
					</div>
				</div>

				<div className="project">
					<div className="image image-right">
						<ImageCollection images={imagesMIPS} />
						<div className="tags">
							<Tag>Verilog</Tag>
							<Tag>Ensambler</Tag>
						</div>
					</div>
					<div className="description description-right">
						<h3>Microprocesador MIPS</h3>
						He modelado y simulado un microprocesador MIPS de 32 bits con pipeline, se le agregaron entradas y salidas al sistema, además de un código en ensamblador de ejemplo, el proyecto está desarrollado en Verilog.
						<Divider />
						<Space>
							<Link href="https://gitlab.com/WilferCiro/microprocesadormips">
								<a target="_blank">
									<Button icon={<GitlabFilled />} type="primary" ghost>View Code</Button>
								</a>
							</Link>
						</Space>
					</div>
				</div>

				<div className="project">
					<div className="image">
						<ImageCollection images={imagesSTI} />
						<div className="tags">
							<Tag>Django</Tag>
							<Tag>python3</Tag>
							<Tag>QT5</Tag>
							<Tag>C++</Tag>
							<Tag>C</Tag>
							<Tag>Raspberry pi</Tag>
							<Tag>Arduino</Tag>
						</div>
					</div>
					<div className="description">
						<h3>Stiirrigation</h3>
						Plataforma para el regado automático de plantaciones, mi trabajo fue la construcción del api y la plataforma de administración, además de una interfáz en python para una raspberry pi v3
						<Divider />
						<Tag color="magenta">Confidential</Tag>
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
					h3 {
						color: ${theme.primary}
					}
					.project{
						width: 90%;
						margin: auto;
						position: relative;
						margin-bottom: 80px;
						padding: 15px 5px;
						border-bottom: dashed 2px ${theme.textPrimary};
					}
					.project h3{
						color: ${theme.primary};
						font-weight: bold;
					}
					.image{
						width: 50%;
					}
					.image-right {
						margin-left: 50%;
						text-align: right;
					}
					img{
						width: 100%;
					}
					.description{
						position: absolute;
						background: ${theme.bgPrimary};
						top: 25%;
						left: 45%;
						width: 55%;
						z-index: 2;
						padding: 20px 30px;
						box-shadow: 2px 2px 5px black;
					}
					.description-right {
						left: 0px;
					}
					.tags {
						width: 80%;
					}
					.image-right .tags{
						margin-left: 20%;
					}


					@media (max-width: 767px) {
						section{
							padding: 20px 15px;
						}
						.image{
							width: 100%;
							margin: 0px !important;
							padding: 0px;
							text-align: left;
						}
						.tags{
							width: 100%;
							margin: 0px !important;
							position: static;
						}
						.description{
							position: static;
							width: 100%;
							margin: auto;
							top: 0px;
							left: 0px;
							box-shadow: none;
							padding: 15px 10px;
							background: transparent;
						}
					}
				`}
			</style>
		</>
	)
}

export default React.memo(ProjectsSection)