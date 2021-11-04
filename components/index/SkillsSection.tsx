/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React from 'react';
import dynamic from 'next/dynamic'

// Antd
import {
	Divider,
	List
} from 'antd';

// Custom
import { theme } from '@/styles/theme';
const SkillItem = dynamic(() => import('@/components/index/SkillItem'))

// Translate
import useTranslation from 'next-translate/useTranslation'

const SkillsSection = () => {
	const { t } = useTranslation("home")

	const data = [
		{"title" : "Javascript", "items" : ["React JS", "Next JS", "Express"], "image" : "/img/index/langs/javascript.webp"},
		{"title" : "Python", "items" : ["Django", "FastApi", t("skills_desktop"), "OpenCV"], "image" : "/img/index/langs/python.webp"},
		{"title" : "Dart", "items" : ["Flutter mobile"], "image" : "/img/index/langs/flutter.webp"},
		{"title" : "C && C++", "items" : ["Desktop", "arduino", "GTK", "QT"], "image" : "/img/index/langs/cpp.webp"},
		{"title" : "GNU/Linux", "items" : ["Ubuntu based", "Arch based", "From scratch"], "image" : "/img/index/langs/linux.webp"},
		{"title" : "SQL", "items" : ["MySQL", "PostgreSQL"], "image" : "/img/index/langs/sql.webp"},
		{"title" : "No SQL", "items" : ["MongoDB", "Elastic Search"], "image" : "/img/index/langs/nosql.webp"},
		{"title" : t("skills_tools"), "items" : ["Git", "Asana", "Jira"], "image" : "/img/index/langs/git.webp"},
		{"title" : "HDL", "items" : ["VHDL", "Verilog"], "image" : "/img/index/langs/vhdl.webp"},
		{"title" : t("skills_embedded"), "items" : ["Arduino", "ESP32", "Raspberry pi"], "image" : "/img/index/langs/arduino.webp"},
		{"title" : "C#", "items" : ["Unity 3D"], "image" : "/img/index/langs/cnumeral.webp"},
		{"title" : "Kotlin", "items" : ["Android"], "image" : "/img/index/langs/kotlin.webp"},
	]

	return (
		<>
			<section id="skills">
				<h3>{t("skills_title")}</h3>
				<Divider />
				<List
					grid={{
						gutter: 15,
						xs: 2,
						sm: 2,
						md: 3,
						lg: 3,
						xl: 3,
						xxl: 3,
					}}
					dataSource={data}
					renderItem={item => (
						<List.Item>
							<SkillItem {...item} />
						</List.Item>
					)}
				/>
			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 100px 20% 10px 20%;
						align-items: center;
						margin: 40px auto;
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

export default React.memo(SkillsSection)