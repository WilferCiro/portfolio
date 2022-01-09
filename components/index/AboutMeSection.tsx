
/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and next
import React from 'react';
import Image from 'next/image'

// Antd
import { Timeline, Divider, Row, Col, Typography } from 'antd';
import { style as aboutmeStyle } from '@/styles/index/about-me';

// Translate
import useTranslation from 'next-translate/useTranslation';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { style as styleJSON } from '@/styles/json-code';
import { calculate_age } from 'services/tools.service';

const { Text } = Typography;


const AboutMeSection = () => {

	const { t } = useTranslation("home")

	const myData = {
		"name" : "Wilfer Daniel Ciro Maya",
		"spanish" : t("about_spanish"),
		"english" : "B1",
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
			<section id="about">
				<Row gutter={[30, 16]} align="top">
					<Col xs={24} md={11}>
						<h3>{t("about_about-me")}</h3>
						<Divider />
						<div className="my-description">
							<div className="image">
								<Image
									src={"/img/index/me.webp"}
									width={100}
									height={100}
									layout={"responsive"}
									alt={"Foto de Wilfer Daniel Ciro Maya"}
								/>
							</div>
							<p>{t("about_description")}</p>
							<p>{t("about_description2")}</p>
						</div>
						<Divider />
						<SyntaxHighlighter language="json" style={styleJSON} wrapLongLines={true}>
							{JSON.stringify(myData, null, 4)}
						</SyntaxHighlighter>
					</Col>
					<Col xs={23} md={13}>
						<h3 className="h3-right">{t("about_timeline")}</h3>
						<Divider />
							<Timeline mode="left" pending={t("about_next") + "..."}>
								<Timeline.Item label={t("about_birth_date")}>
									<Text>{t("about_my-birth")}</Text><br />
									<Text type="secondary">{t("about_birth_place")}</Text>
								</Timeline.Item>
								<Timeline.Item color="green" label={t("about_start-programming_date")}>
									<Text>{t("about_start-programming")}</Text><br />
									<Text type="secondary">{t("about_start-programming_description")}</Text>
								</Timeline.Item>
								<Timeline.Item color="green" label={t("about_finish-high-school_date")}>
									<Text>{t("about_finish-high-school")}</Text><br />
									<Text type="secondary">{t("about_finish-high-school_description")}</Text>
								</Timeline.Item>
								<Timeline.Item color="green" label={t("about_finish-sena_date")}>
									<Text>{t("about_finish-sena")}</Text><br />
									<Text type="secondary">{t("about_finish-sena_description")}</Text>
								</Timeline.Item>
								<Timeline.Item color="purple" label={t("about_first-job_date")}>
									<Text>{t("about_first-job")}</Text><br />
									<Text type="secondary">{t("about_first-job_description")}</Text>
								</Timeline.Item>
								<Timeline.Item color="green" label={t("about_finish-university_date")}>
									<Text>{t("about_finish-university")}</Text><br />
									<Text type="secondary">{t("about_finish-university_description")}</Text>
								</Timeline.Item>
								<Timeline.Item color="purple" label={t("about_second-job_date")}>
									<Text>{t("about_second-job")}</Text><br />
									<Text type="secondary">{t("about_second-job_description")}</Text>
								</Timeline.Item>
							</Timeline>
					</Col>
				</Row>
			</section>

			<style jsx>{aboutmeStyle}</style>
		</>
	)
}

export default React.memo(AboutMeSection)