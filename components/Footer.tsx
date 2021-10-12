/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import Link from 'next/link'
import React from 'react'
import { GithubOutlined, GitlabFilled, LinkedinFilled, MailFilled, InstagramFilled } from '@ant-design/icons'

// Antd
import { Space, Divider, Tooltip } from 'antd'

const Footer = () => {

	return (
		<>
			<footer>
				Designed and created by Wilfer Daniel Ciro Maya<br />
				&copy; 2021
				<Divider />
				<Space size="large">
					<Link href="https://github.com/WilferCiro">
						<a target="_blank">
							<Tooltip placement="right" title={"Go to GitHub profile"}>
								<GithubOutlined />
							</Tooltip>
						</a>
					</Link>
					<Link href="https://gitlab.com/WilferCiro">
						<a target="_blank">
							<Tooltip placement="right" title={"Go to GitLab profile"}>
								<GitlabFilled />
							</Tooltip>
						</a>
					</Link>
					<Link href="https://www.linkedin.com/in/wilfer-ciro/">
						<a target="_blank">
							<Tooltip placement="right" title={"Go to LinkedIn profile"}>
								<LinkedinFilled />
							</Tooltip>
						</a>
					</Link>
					<Link href="mailto:wilcirom@gmail.com">
						<a target="_blank">
							<Tooltip placement="right" title={"Send me an email"}>
								<MailFilled />
							</Tooltip>
						</a>
					</Link>
					<Link href="https://www.instagram.com/wilcirom/">
						<a target="_blank">
							<Tooltip placement="right" title={"Go to Instagram profile"}>
								<InstagramFilled />
							</Tooltip>
						</a>
					</Link>
					<div className="line" />
				</Space>
			</footer>

			<style jsx>
				{`
					footer{
						text-align:center;
						padding: 40px 20%;
						margin-top: 40px;
					}
					a{
						font-size: 30px;
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

export default React.memo(Footer)