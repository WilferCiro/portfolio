/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import Link from 'next/link'
import React from 'react'

// Antd
import { Divider, Button } from 'antd'
import { TranslationOutlined, CodeOutlined } from '@ant-design/icons'

// Translation
import useTranslation from 'next-translate/useTranslation'
import SocialMedia from '@/components/portfolio/SocialMedia'

const Footer = () => {

	const { t, lang } = useTranslation("home")

	const today = new Date();
	const age_now = today.getFullYear()

	return (
		<>
			<footer>
				<Divider />
				{t("footer_developed")} Wilfer Daniel Ciro Maya<br />
				{age_now}<br />
				<a href="https://github.com/WilferCiro/portfolio" rel="noreferrer" target="_blank">
					<Button type="link" icon={<CodeOutlined />}>Ver código</Button>
				</a>
				<Divider />
				<SocialMedia />
					
				<div>
					{
						lang === "es" ? 
						<Link href="/en">
							<a>
								<Button type="link" icon={<TranslationOutlined />}>Ver en inglés</Button>
							</a>
						</Link>
						:
						<Link href="/es">
							<a>
								<Button type="link" icon={<TranslationOutlined />}>View in spanish</Button>
							</a>
						</Link>
					}
				</div>
			</footer>

			<style jsx>
				{`
					footer{
						text-align:center;
						padding: 40px 20%;
						margin-top: 40px;
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