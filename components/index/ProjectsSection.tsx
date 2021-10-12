/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React from 'react';
import Link from 'next/link'

// Antd
import {
	Space,
	Divider,
	Button,
	Tag
} from 'antd';

// Custom
import { theme } from '@/styles/theme'
import { GitlabFilled, LinkOutlined, ContactsFilled } from '@ant-design/icons';
import ProjectItem from './ProjectItem';

const ProjectsSection = () => {

	const imagesKiwi = [
		"/img/index/kiwipeluditos/img1.png",
		"/img/index/kiwipeluditos/img2.png",
		"/img/index/kiwipeluditos/img3.png",
		"/img/index/kiwipeluditos/img4.png"
	]
	const tagsKiwi = ["NextJS", "PostgreSQL", "Django", "FastAPI"]
	const descriptionKiwi = "Esta plataforma permite a sus usuarios registrar los datos de sus mascotas y obtener un código QR único según su perfil."

	const imagesTgrado = [
		"/img/index/bdtgrado/img1.png",
		"/img/index/bdtgrado/img2.png",
		"/img/index/bdtgrado/img3.png"
	]
	const tagsTgrado = ["MySQL", "Django"]
	const descriptionTgrado = "Esta plataforma fue desarrollada como trabajo en la universidad del Quindío, es una plataforma para la administración completa de trabajos de grado del programa Ingeniería Electrónica."

	const imagesSintel = [
		"/img/index/sintel/img1.png",
		"/img/index/sintel/img2.png",
		"/img/index/sintel/img3.png",
		"/img/index/sintel/img4.png"
	]
	const tagsSintel = ["Python3", "QT6", "VHDL", "Verilog"]
	const descriptionSintel = "Sintel es un software para el modelado y simulación de sistemas digitales, permite ver en tiempo real el comportamiento del circuito, además de exportar el modelo a códigos HDL como Verilog y VHDL."

	const imagesMIPS = [
		"/img/index/mips/img1.png",
		"/img/index/mips/img2.jpeg",
	]
	const tagsMIPS = ["Verilog", "Ensambler"]
	const descriptionMIPS = "He modelado y simulado un microprocesador MIPS de 32 bits con pipeline, se le agregaron entradas y salidas al sistema, además de un código en ensamblador de ejemplo, el proyecto está desarrollado en Verilog."

	const imagesSTI = [
		"/img/index/sti/img1.png"
	]
	const tagsSTI = ["Django", "python3", "QT5", "C", "C++", "Raspberry Pi", "Arduino"]
	const descriptionSTI = "Plataforma para el regado automático de plantaciones, mi trabajo fue la construcción del api y la plataforma de administración, además de una interfáz en python para una raspberry pi v3"

	return (
		<>
			<section id="projects">
				<h3>My projects</h3>
				<Divider />
				<ProjectItem images={imagesKiwi} tags={tagsKiwi} title="Kiwi Peluditos" description={descriptionKiwi}>
					<>
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
					</>
				</ProjectItem>
				<ProjectItem right={true} images={imagesTgrado} tags={tagsTgrado} title="BD Tgrado" description={descriptionTgrado}>
					<>
						<Space>
							<Link href="https://kiwipeluditos.com">
								<a target="_blank">
									<Button icon={<LinkOutlined />} type="primary" ghost>Visit</Button>
								</a>
							</Link>
							<Button icon={<GitlabFilled />} type="primary" ghost>View Code</Button>
						</Space>
					</>
				</ProjectItem>
				<ProjectItem images={imagesSintel} tags={tagsSintel} title="Sintel" description={descriptionSintel}>
					<>
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
					</>
				</ProjectItem>
				<ProjectItem right={true} images={imagesMIPS} tags={tagsMIPS} title="Microprocesador MIPS" description={descriptionMIPS}>
					<>
						<Space>
							<Link href="https://gitlab.com/WilferCiro/microprocesadormips">
								<a target="_blank">
									<Button icon={<GitlabFilled />} type="primary" ghost>View Code</Button>
								</a>
							</Link>
						</Space>
					</>
				</ProjectItem>
				<ProjectItem images={imagesSTI} tags={tagsSTI} title="Stiirrigation" description={descriptionSTI}>
					<>
						<Tag color="magenta">Confidential</Tag>
					</>
				</ProjectItem>
			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 100px 20% 10px 20%;
						align-items: center;
					}
					h3 {
						color: ${theme.primary}
					}
					@media (max-width: 767px) {
						section{
							padding: 20px 15px;
						}
					}
				`}
			</style>
		</>
	)
}

export default React.memo(ProjectsSection)