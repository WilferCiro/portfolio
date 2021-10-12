
import React from 'react';

// Antd
import { Timeline, Divider } from 'antd';
import { theme } from '@/styles/theme';

const AboutMeSection = () => {
	return (
		<>
			<section id="about">
				<h3>My timeline</h3>
				<Divider />
				<Timeline mode="left">
					<Timeline.Item label="1998-05-29">My birth</Timeline.Item>
					<Timeline.Item color="green" label="2013-05-05">Start studying programming</Timeline.Item>
					<Timeline.Item color="green" label="2014-12-12">Finish high school</Timeline.Item>
					<Timeline.Item color="purple" label="2020-05-15">I started my first job as a fullstack Junior developer </Timeline.Item>
					<Timeline.Item color="green" label="2020-08-10">I finished my university degree</Timeline.Item>
					<Timeline.Item color="purple" label="2021-08-15">I started my second job as fullstack at Negozia CF</Timeline.Item>
				</Timeline>
			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 10px 20%;
					}
					h3{
						color: ${theme.primary}
					}
					@media (max-width: 767px) {
						section{
							padding: 20px 15px;
						}
					}
				`} 
			</style>
		</>
	)
}

export default React.memo(AboutMeSection)