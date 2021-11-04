/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and nextJS
import useTranslation from "next-translate/useTranslation";
import React from "react";

// Antd

// Custom

// Third Part

const Aditional = () => {
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
		<div id="aditional">
			

			<style jsx>
				{`
					.skill{
						
					}
				`}
			</style>
		</div>
	)
}

export default React.memo(Aditional);