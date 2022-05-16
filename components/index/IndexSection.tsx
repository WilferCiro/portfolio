/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and nextJS
import React from 'react';
import Link from 'next/link'


// Custom
import { style } from '@/styles/index/index-section'

// Animations
import MePhoto from '@/components/index/MePhoto';

// Translate
import useTranslation from "next-translate/useTranslation"
import ParticlesBG from '../portfolio/ParticlesBG';
import Button from '../controls/Button';

const IndexSection = () => {

	const { t } = useTranslation("home")
	
	return (
		<>
			<ParticlesBG />
			<section id="index" className='clear-to-dark'>					
				<div>
					<MePhoto />
				</div>
				<div>
					<div className="data">
						<p className="my-name">{t("index_my-name")}</p>
						<h1>Wilfer Daniel Ciro Maya</h1>
						<h2>{t("index_subtitle")}</h2>
						<p>{t("index_description")}</p>
						<Link href="https://drive.google.com/file/d/1HtbNVGocGdFbvCa7mgrWlFrlw-s6oGyD/view?usp=sharing">
							<a target="_blank">
								<Button text={t("header_resume")} />
							</a>
						</Link>
					</div>
				</div>

			</section>

			<style jsx>{style}</style>
		</>
	)
}

export default React.memo(IndexSection)