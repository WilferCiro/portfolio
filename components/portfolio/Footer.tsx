/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import Link from 'next/link'
import React from 'react'

// Antd
import { TranslationOutlined, CodeOutlined } from '@ant-design/icons'

// Translation
import useTranslation from 'next-translate/useTranslation'
import SocialMedia from '@/components/portfolio/SocialMedia'
import Button from '../controls/Button'

const Footer = () => {

	const { t, lang } = useTranslation("home")

	const today = new Date();
	const age_now = today.getFullYear()

	return (
		<>
			<footer>
				<hr />
				{t("footer_developed")}<br /> Wilfer Daniel Ciro Maya <br /><br /> {age_now}<br />
				<hr />
				<SocialMedia />
					
				<div>
					{
						lang === "es" ? 
						<Link href="/en">
							<a>
								<Button icon={<TranslationOutlined />} text={"Ver en inglés"} />
							</a>
						</Link>
						:
						<Link href="/es">
							<a>
								<Button icon={<TranslationOutlined />} text={"View in spanish"} />
							</a>
						</Link>
					}

					<a href="https://github.com/WilferCiro/portfolio" rel="noreferrer" target="_blank">
						<Button icon={<CodeOutlined />} text={"View code"} />
					</a>
				</div>
			</footer>

			<style jsx>
				{`
					footer{
						text-align:center;
						padding: 10px;
						width: 60vw;
						margin: auto;
						margin-top: 40px;
					}
					hr {
						margin: 40px;
					}
					@media (max-width: 767px) {
						footer{
							padding: 40px 5%;
						}
					}
				`}	
			</style>	
		</>
	)
}

export default React.memo(Footer)