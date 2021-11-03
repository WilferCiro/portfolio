/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React, { useEffect } from "react"
import dynamic from 'next/dynamic'

// Animations
import { motion, useAnimation } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import { useInView } from 'react-intersection-observer';

// Antd
import { Divider, Tag } from "antd";

// Custom
import { theme } from "@/styles/theme";
const ImageCollection = dynamic(() => import('@/components/ImageCollection'))


interface Props {
	children: JSX.Element,
	images: Array<string>,
	tags: Array<string>,
	title: string,
	description: string,
	right?: boolean
}

const ProjectItem = ({children, images, tags, right, title, description} : Props) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
	
	return (
		<>
			<motion.div
				ref={ref}
				variants={animContainer}
				initial="hidden"
				animate={controls}
			>
				<motion.div variants={animItem}>
					<div className="project">
						<div className={right ? "image image-right" : "image"}>
							<ImageCollection images={images} />
							<div className="tags">
								{
									tags.map((item: string) => {
										return <Tag key={Math.random()}>{item}</Tag>
									})
								}
							</div>
						</div>
							
						<div className={right ? "description description-right" : "description"}>
							<h3>{title}</h3>
							<p>{description}</p>
							<Divider />
							{children}
						</div>

					</div>
				</motion.div>
			</motion.div>

			<style jsx>
			{`
				h3 {
					color: ${theme.primary}
				}
				.project{
					width: 90%;
					margin: auto;
					position: relative;
					margin-bottom: 80px;
					padding: 15px 5px;
					border-bottom: dashed 2px ${theme.textSecundary};
					text-align: justify;
				}
				.project h3{
					color: ${theme.primary};
					font-weight: bold;
				}
				.image{
					width: 50%;
				}
				.image-right {
					margin-left: 50%;
					text-align: right;
				}
				img{
					width: 100%;
				}
				.description{
					position: absolute;
					background: ${theme.bgPrimary};
					top: 20%;
					left: 45%;
					width: 55%;
					z-index: 2;
					padding: 20px 30px;
					box-shadow: 2px 2px 5px black;
				}
				.description-right {
					left: 0px;
				}
				.tags {
					width: 80%;
				}
				.image-right .tags{
					margin-left: 20%;
				}


				@media (min-width: 767px) and (max-width: 1100px) {
					.description{
						position: static;
						width: 100%;
						margin: auto;
						top: 0px;
						left: 0px;
						padding: 15px 10px;
					}
					.project {
						display: flex;
						justify-content: space-between;
					}
					.image{
						margin: 0px;
					}

				}
				@media (max-width: 767px) {
					.image{
						width: 100%;
						margin: 0px !important;
						padding: 0px;
						text-align: left;
					}
					.tags{
						width: 100%;
						margin: 0px !important;
						position: static;
					}
					.description{
						position: static;
						width: 100%;
						margin: auto;
						top: 0px;
						left: 0px;
						box-shadow: none;
						padding: 15px 10px;
						background: transparent;
					}
				}
			`}
			</style>
		</>
	)
}

export default React.memo(ProjectItem)