/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React from 'react';
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Antd
import {
	Space,
	Divider,
	Button,
	Tag
} from 'antd';
import { GitlabFilled, LinkOutlined, ContactsFilled } from '@ant-design/icons';

// Custom
import { theme } from '@/styles/theme'
const ProjectItem = dynamic(() => import('@/components/index/ProjectItem'))

const ProjectsSection = () => {

	const projects = [
		{
			"images" : [
				"/img/index/kiwipeluditos/img1.png",
				"/img/index/kiwipeluditos/img2.png",
				"/img/index/kiwipeluditos/img3.png",
				"/img/index/kiwipeluditos/img4.png"
			],
			"title" : "Kiwi Peluditos",
			"tags" : ["NextJS", "PostgreSQL", "Django", "FastAPI"],
			"description" : "Kiwi peluditos is a platform where people can add the data of their pets, contact data, vaccines, diseases and generate a unique QR code that identifies them, in addition to allowing them to report their disappearance.",
			"children" : <Space>
				<Link href="https://kiwipeluditos.com">
					<a target="_blank" rel="noreferrer">
						<Button icon={<LinkOutlined />} type="primary" ghost>Visit</Button>
					</a>
				</Link>
				<Link href="https://kiwipeluditos.com/ayuda">
					<a target="_blank" rel="noreferrer">
						<Button icon={<ContactsFilled />} type="primary" ghost>Contact page</Button>
					</a>
				</Link>
			</Space>
		},
		{
			"images" : [
				"/img/index/bdtgrado/img1.png",
				"/img/index/bdtgrado/img2.png",
				"/img/index/bdtgrado/img3.png"
			],
			"title" : "BD tgrado",
			"tags" : ["MySQL", "Django"],
			"description" : "This platform was developed as a job at the University of Quindío, it is a platform for the complete administration of degree projects of the Electronic Engineering program.",
			"children" : <Space>
				<Link href="https://kiwipeluditos.com">
					<a target="_blank" rel="noreferrer">
						<Button icon={<LinkOutlined />} type="primary" ghost>Visit</Button>
					</a>
				</Link>
				<Button icon={<GitlabFilled />} type="primary" ghost>View Code</Button>
			</Space>
		},
		{
			"images" : [
				"/img/index/sintel/img1.png",
				"/img/index/sintel/img2.png",
				"/img/index/sintel/img3.png",
				"/img/index/sintel/img4.png"
			],
			"title" : "Sintel",
			"tags" : ["Python3", "QT6", "VHDL", "Verilog"],
			"description" : "Sintel is a software for the modeling and simulation of digital systems, it allows to see in real time the behavior of digital circuits, in addition to exporting the model to HDL codes such as Verilog and VHDL.",
			"children" : <Space>
				<Link href="https://wilferciro.gitlab.io/sintel/">
					<a target="_blank" rel="noreferrer">
						<Button icon={<LinkOutlined />} type="primary" ghost>Visit</Button>
					</a>
				</Link>
				<Link href="https://gitlab.com/WilferCiro/sintel">
					<a target="_blank" rel="noreferrer">
						<Button icon={<GitlabFilled />} type="primary" ghost>View Code</Button>
					</a>
				</Link>
			</Space>
		},
		{
			"images" : [
				"/img/index/mips/img1.png",
				"/img/index/mips/img2.jpeg",
			],
			"title" : "32 bits MIPS",
			"tags" : ["Verilog", "Ensambler"],
			"description" : "I have modeled and simulated a pipelined 32-bit MIPS microprocessor, inputs and outputs were added to the system, as well as an example assembler code.",
			"children" : <Space>
				<Link href="https://gitlab.com/WilferCiro/microprocesadormips">
					<a target="_blank" rel="noreferrer">
						<Button icon={<GitlabFilled />} type="primary" ghost>View Code</Button>
					</a>
				</Link>
			</Space>
		},
		{
			"images" : [
				"/img/index/sti/img1.png"
			],
			"title" : "Sti irrigation",
			"tags" : ["Django", "python3", "QT5", "C", "C++", "Raspberry Pi", "Arduino"],
			"description" : "Platform for the management of automatic irrigation of plantations, my work was the construction of the api and the administration platform, as well as a python software for a raspberry pi v3",
			"children" : <Tag color="magenta">Confidential</Tag>
		}
	]

	return (
		<>
			<section id="projects">
				<h3>My projects</h3>
				<Divider />

				{
					projects.map((project: any, index: number) => {
						return <ProjectItem key={Math.random()} {...project} right={index % 2 !== 0} />
					})
				}

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
					@media (min-width: 767px) and (max-width: 1100px) {
						section{
							padding: 20px 15%;
						}
					}
				`}
			</style>
		</>
	)
}

export default React.memo(ProjectsSection)