
import React from 'react';

import Image from 'next/image'

import { theme } from '@/styles/theme'

// Antd
import {
	Col,
	Row
} from 'antd';

const IndexSection = () => {
	return (
		<>
			<section id="index">
				<Row align="middle" justify="center">
					<Col xs={24} md={15}>
						<div className="data">
							<div>
								<p className="my-name">Hi, my name is</p>
								<h1>Wilfer Daniel Ciro Maya</h1>
								<h2>Full stack developer</h2>
								<p>Electronic Engineer than builds solutions for the world</p>
							</div>
						</div>
					</Col>
					<Col xs={24} md={9}>
						<div className="image">
							<Image
								alt="My Photo"
								src={"/img/index/me.png"}
								layout={"responsive"}
								width={350}
								height={350}
							/>
						</div>
					</Col>
				</Row>

			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 10px 20%;
					}
					.data{
						height: 100vh;
						display: flex;
						align-items: center;
					}
					.my-name{
						color: ${theme.primary};
						margin: 0px;
					}
					h1{
						color: ${theme.textPrimary};
						font-size: 40px;
						margin: 0px;
					}
					h2{
						color: ${theme.textSecundary};
						font-size: 35px;
					}
					.image{
						overflow: hidden;
						border-radius: 10% 50% 25% 30%;
					}
					@media (max-width: 767px) {
						section {
							padding: 100px 20px;
							display: block;
						}
						h1{
							font-size: 27px;
						}
						.image{
							border-radius: 100%;
							width: 90%;
							margin: auto;
						}
						.data{
							height: auto;
						}
						
					}
				`}
			</style>
		</>
	)
}

export default React.memo(IndexSection)