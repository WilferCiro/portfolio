/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and nextJS
import { GithubOutlined, GitlabFilled, InstagramFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import Tooltip from "../controls/Tooltip";

// Antd

// Custom

// Third Part

const SocialMedia = () => {

	const { t, lang } = useTranslation("home")

	return (
		<>
			<div className="space">
				<Link href="https://github.com/WilferCiro">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_github")}>
							<GithubOutlined />
						</Tooltip>
					</a>
				</Link>
				<Link href="https://gitlab.com/WilferCiro">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_gitlab")}>
							<GitlabFilled />
						</Tooltip>
					</a>
				</Link>
				<Link href="https://www.linkedin.com/in/wilfer-ciro/">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_linkedin")}>
							<LinkedinFilled />
						</Tooltip>
					</a>
				</Link>
				<Link href="mailto:wilcirom@gmail.com">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_mail")}>
							<MailFilled />
						</Tooltip>
					</a>
				</Link>
				<Link href="https://www.instagram.com/wilcirom/">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_instagram")}>
							<InstagramFilled />
						</Tooltip>
					</a>
				</Link>
			</div>

			<style jsx>
				{`
					a{
						font-size: 30px;
						color:  var(--font-color);
					}
					a:hover{
						color:  var(--primary-color);
					}
					.space{
						display: flex;
						gap: 20px;
						align-items: center;
						justify-content: center;
						margin: 25px;
					}
					@media (max-width: 767px) {
						a{
							font-size: 22px;
						}
					}
				`}	
			</style>
		</>
	)
}

export default React.memo(SocialMedia);