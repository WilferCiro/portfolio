
/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and next
import React from 'react';
import Image from 'next/image'

// Antd
import { style as aboutmeStyle } from '@/styles/index/about-me';

// Translate
import useTranslation from 'next-translate/useTranslation';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { style as styleJSON } from '@/styles/json-code';
import { calculate_age } from 'services/tools.service';


const AboutMeSection = () => {

	const { t } = useTranslation("home")

	const myData = {
		"name" : "Wilfer Daniel Ciro Maya",
		"languages" : {
			"spanish" : t("about_spanish"),
			"english" : "B1",
		},
		"age" : calculate_age(),
		"county" : "Colombia 🇨🇴️",
		"hobbies" : [
			t("gym"),
			t("series_movies"),
			t("video_games"),
			t("travel")
		],
		"profession" : t("about_profession")
	}

	return (
		<>
			<section id="about" className='dark-to-clear'>

				<h3>{t("about_about-me")}</h3>
				<hr />


				

				<div className="my-description">
					<div className="image">
						<Image
							src={"/img/index/me.webp"}
							width={80}
							height={80}
							layout={"responsive"}
							alt={"Foto de Wilfer Daniel Ciro Maya"}
						/>
					</div>
					<div>
						<SyntaxHighlighter language="json" style={styleJSON} wrapLongLines={true}>
							{JSON.stringify(myData, null, 4)}
						</SyntaxHighlighter>
						<cite className="about_description">
							<p>{t("about_description")}</p>
							<p>{t("about_description2")}</p>
						</cite>
					</div>
				</div>

				<h3>{t("about_timeline")}</h3>
				<hr />
				<ul>
					<li>
						<h3>{t("about_birth_date")}</h3>
						<p>{t("about_my-birth")}</p>
						<p>{t("about_birth_place")}</p>
					</li>
					<li>
						<h3>{t("about_start-programming_date")}</h3>
						<p>{t("about_start-programming")}</p>
						<p>{t("about_start-programming_description")}</p>
					</li>
					<li>
						<h3>{t("about_finish-high-school_date")}</h3>
						<p>{t("about_finish-high-school")}</p>
						<p>{t("about_finish-high-school_description")}</p>
					</li>
					<li>
						<h3>{t("about_finish-sena_date")}</h3>
						<p>{t("about_finish-sena")}</p>
						<p>{t("about_finish-sena_description")}</p>
					</li>
					<li>
						<h3>{t("about_first-job_date")}</h3>
						<p>{t("about_first-job")}</p>
						<p>{t("about_first-job_description")}</p>
					</li>
					<li>
						<h3>{t("about_finish-university_date")}</h3>
						<p>{t("about_finish-university")}</p>
						<p>{t("about_finish-university_description")}</p>
					</li>
					<li>
						<h3>{t("about_second-job_date")}</h3>
						<p>{t("about_second-job")}</p>
						<p>{t("about_second-job_description")}</p>
					</li>
				</ul>
			</section>

			<style jsx>{aboutmeStyle}</style>
		</>
	)
}

export default React.memo(AboutMeSection)