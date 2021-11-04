/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// Next and react
import React, {useEffect} from "react"

// Animations
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Antd
import {
	Tag
} from 'antd'
import { theme } from "@/styles/theme";

interface Props {
	title: string,
	items: Array<string>,
	image: string
}

const SkillItem = ({title, items, image} : Props) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<>

			<div className="skill">
				<div className="image"></div>
				<div className="description">
					<p>{title}</p>
					<div className="">
						{
							items.map((item: string) => {
								return <Tag key={Math.random()}>{item}</Tag>
							})
						}
					</div>
				</div>
			</div>

			<style jsx>
			{`
				.skill{
					background: ${theme.bgPrimary};
					width: 100%;
					height: 140px;
					border-radius: 10px;
					overflow: hidden;
					position: relative;
				}
				.skill:hover .image{
					width: calc(100% - 10px);
					height: calc(100% - 15px);
					position: absolute;
					top: 5px;
					left: 5px;
					background-size: 100% 100%;
					background-position: 0px 0px;
					filter: blur(0px);
					background-image: url(${image});
					background-size: contain;
					border-radius: 5px;
				}
				.image{
					background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.bgPrimary}), url(${image});
					background-size:     cover;
					background-repeat:   no-repeat;
					background-position: center center;
					filter: blur(1px);
					width: 100%;
					height: 50px;
					transition: all 0.1s;
					border-radius: 5px;
				}
				.description {
					padding: 10px 15px;
					width: 100%;
					margin-top: -10px;
					background: ${theme.bgPrimary};
				}
				.description p{
					color: ${theme.primary}
				}
			`}
			</style>
		</>
	)
}

export default React.memo(SkillItem)

/*

			<motion.div
				ref={ref}
				variants={animContainer}
				initial="hidden"
				animate={controls}
			>
				<motion.div variants={animItem}>
					<Card
						style={{ width: "100%", height: "100%" }}
						cover={<Image width={800} height={400} alt="example" src={image} />}
					>
						<Meta title={title} description={
							items.map((item: string) => {
								return <Tag key={Math.random()}>{item}</Tag>
							})
						} />
					</Card>
				</motion.div>
			</motion.div>

*/