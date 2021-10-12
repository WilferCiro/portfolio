/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React from 'react';

// Antd
import {
	Divider,
	List
} from 'antd';

// Custom
import { theme } from '@/styles/theme';
import SkillItem from '@/components/index/SkillItem';

const SkillsSection = () => {

	const data = [
		{"title" : "Javascript", "items" : ["React JS", "Next JS", "Express"], "image" : "/img/index/langs/javascript.png"},
		{"title" : "Python", "items" : ["Django", "FastApi", "Desktop", "OpenCV"], "image" : "/img/index/langs/python.jpg"},
		{"title" : "Dart", "items" : ["Flutter mobile"], "image" : "/img/index/langs/flutter.png"},
		{"title" : "C && C++", "items" : ["Desktop", "arduino", "GTK", "QT"], "image" : "/img/index/langs/cpp.png"},
		{"title" : "GNU/Linux", "items" : ["Ubuntu based", "Arch based", "From scratch"], "image" : "/img/index/langs/linux.jpg"},
		{"title" : "SQL", "items" : ["MySQL", "PostgreSQL"], "image" : "/img/index/langs/sql.png"},
		{"title" : "No SQL", "items" : ["MongoDB", "Elastic Search"], "image" : "/img/index/langs/nosql.png"},
		{"title" : "Development tools", "items" : ["Git", "Asana", "Jira"], "image" : "/img/index/langs/git.jpg"},
		{"title" : "HDL", "items" : ["VHDL", "Verilog"], "image" : "/img/index/langs/vhdl.png"},
		{"title" : "Embedded systems", "items" : ["Arduino", "ESP32", "Raspberry pi"], "image" : "/img/index/langs/arduino.png"},
		{"title" : "C#", "items" : ["Unity 3D"], "image" : "/img/index/langs/cnumeral.jpg"},
	]

	return (
		<>
			<section id="skills">
				<h3>My skills</h3>
				<Divider />

				<List
					grid={{
						gutter: 15,
						xs: 2,
						sm: 2,
						md: 3,
						lg: 3,
						xl: 4,
						xxl: 4,
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