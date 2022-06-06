/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React from 'react';
import dynamic from 'next/dynamic'

// Custom
const SkillItem = dynamic(() => import('@/components/index/SkillItem'))

// Translate
import useTranslation from 'next-translate/useTranslation'

const SkillsSection = () => {
	const { t } = useTranslation("home")

	const data = [
		{"title" : "Javascript", "items" : ["React JS", "Next JS", "Express", "Vanilla"], "image" : "/img/index/langs/javascript.webp"},
		{"title" : "Python", "items" : ["Django", "Flask", t("skills_desktop"), "OpenCV"], "image" : "/img/index/langs/python.webp"},
		{"title" : "Dart", "items" : ["Flutter mobile"], "image" : "/img/index/langs/flutter.webp"},
		{"title" : "C && C++", "items" : ["Desktop", "arduino", "GTK", "QT"], "image" : "/img/index/langs/cpp.webp"},
		{"title" : "GNU/Linux", "items" : ["Ubuntu based", "Arch based", "From scratch"], "image" : "/img/index/langs/linux.webp"},
		{"title" : "SQL", "items" : ["MySQL", "PostgreSQL"], "image" : "/img/index/langs/sql.webp"},
		{"title" : "No SQL", "items" : ["MongoDB", "Elastic Search"], "image" : "/img/index/langs/nosql.webp"},
		{"title" : t("skills_tools"), "items" : ["Git", "Asana", "Jira", "SonarQube", "Jenkins"], "image" : "/img/index/langs/git.webp"},
		{"title" : "HDL", "items" : ["VHDL", "Verilog", "FPGA"], "image" : "/img/index/langs/vhdl.webp"},
		{"title" : t("skills_embedded"), "items" : ["Arduino", "ESP32", "Raspberry pi"], "image" : "/img/index/langs/arduino.webp"},
		{"title" : "C#", "items" : ["Unity 3D"], "image" : "/img/index/langs/cnumeral.webp"},
		{"title" : "Kotlin", "items" : ["Android"], "image" : "/img/index/langs/kotlin.webp"},
	]

	return (
		<>
			<section id="skills" className='dark-to-clear'>
				<h3>{t("skills_title")}</h3>
				<hr />
				<div className="skills">
					{
						data.map((item: any, index: number) => {
							return <SkillItem {...item} key={"item-" + index} />
						})
					}
				</div>
							
			</section>
			<style jsx>
				{`
					section{
						position: relative;
						background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-color) 80%, var(--bg-color2) 100%);	
					}
					.skills{
						display: grid;
						grid-template-columns: 1fr 1fr 1fr 1fr;
						grid-gap: 10px;
					}
				`}
			</style>
			</>
	)
}

export default React.memo(SkillsSection)