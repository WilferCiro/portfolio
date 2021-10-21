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

// Translation
import useTranslation from 'next-translate/useTranslation';

const ProjectsSection = () => {
	
	const { t } = useTranslation("home")

	const projects = [
		{
			"images" : [
				"/img/index/kiwipeluditos/img1.webp",
				"/img/index/kiwipeluditos/img2.webp",
				"/img/index/kiwipeluditos/img3.webp",
				"/img/index/kiwipeluditos/img4.webp"
			],
			"title" : "Kiwi Peluditos",
			"tags" : ["NextJS", "PostgreSQL", "Django", "FastAPI"],
			"description" : t("projects_kiwi-description"),
			"children" : <Space>
				<Link href="https://kiwipeluditos.com">
					<a target="_blank" rel="noreferrer">
						<Button icon={<LinkOutlined />} type="primary" ghost>{t("visit")}</Button>
					</a>
				</Link>
				<Link href="https://kiwipeluditos.com/ayuda">
					<a target="_blank" rel="noreferrer">
						<Button icon={<ContactsFilled />} type="primary" ghost>{t("contact_page")}</Button>
					</a>
				</Link>
			</Space>
		},
		{
			"images" : [
				"/img/index/bdtgrado/img1.webp",
				"/img/index/bdtgrado/img2.webp",
				"/img/index/bdtgrado/img3.webp",
				"/img/index/bdtgrado/img4.webp",
				"/img/index/bdtgrado/img5.webp",
				"/img/index/bdtgrado/img6.webp"
			],
			"title" : "BD tgrado",
			"tags" : ["MySQL", "Django"],
			"description" : t("projects_tgrado-description"),
			"children" : <Tag color="magenta">{t("confidential")}</Tag>
		},
		{
			"images" : [
				"/img/index/sintel/img1.webp",
				"/img/index/sintel/img2.webp",
				"/img/index/sintel/img3.webp",
				"/img/index/sintel/img4.webp"
			],
			"title" : "Sintel",
			"tags" : ["Python3", "QT6", "VHDL", "Verilog"],
			"description" : t("projects_sintel-description"),
			"children" : <Space>
				<Link href="https://wilferciro.gitlab.io/sintel/">
					<a target="_blank" rel="noreferrer">
						<Button icon={<LinkOutlined />} type="primary" ghost>{t("visit")}</Button>
					</a>
				</Link>
				<Link href="https://gitlab.com/WilferCiro/sintel">
					<a target="_blank" rel="noreferrer">
						<Button icon={<GitlabFilled />} type="primary" ghost>{t("view_code")}</Button>
					</a>
				</Link>
			</Space>
		},
		{
			"images" : [
				"/img/index/mips/img1.webp",
				"/img/index/mips/img2.webp",
			],
			"title" : "32 bits MIPS",
			"tags" : ["Verilog", "Ensambler"],
			"description" : t("projects_mips-description"),
			"children" : <Space>
				<Link href="https://gitlab.com/WilferCiro/microprocesadormips">
					<a target="_blank" rel="noreferrer">
						<Button icon={<GitlabFilled />} type="primary" ghost>{t("view_code")}</Button>
					</a>
				</Link>
			</Space>
		},
		{
			"images" : [
				"/img/index/sti/img1.webp"
			],
			"title" : "Sti irrigation",
			"tags" : ["Django", "python3", "QT5", "C", "C++", "Raspberry Pi", "Arduino"],
			"description" : t("projects_sti-description"),
			"children" : <Tag color="magenta">{t("confidential")}</Tag>
		}
	]

	return (
		<>
			<section id="projects">
				<h3>{t("projects_title")}</h3>
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
						padding: 100px 15% 10px 15%;
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