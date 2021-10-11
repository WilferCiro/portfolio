
import React from 'react';

import Image from 'next/image'

import { theme } from '@/styles/theme'

const AboutMeSection = () => {
	return (
		<>
			<section id="about">
				<div>
					<p className="my-name">Hi, my name is</p>
					<h1>Wilfer Daniel Ciro Maya</h1>
					<h2>Full stack developer</h2>
					<p>Electronic Engineer than builds solutions for the world</p>
				</div>
				<div className="image">
					<Image
						src={"/img/index/me.jpeg"}
						layout={"fixed"}
						width={350}
						height={350}
					/>
				</div>

			</section>

			<style jsx>
				{`
					section {
						height: 100vh;
						padding: 10px 20%;
						display: flex;
						align-items: center;
						justify-content: space-between;
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
				`}
			</style>
		</>
	)
}

export default React.memo(AboutMeSection)