
import React from 'react';

// Antd
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const AboutMeSection = () => {
	return (
		<>
			<section id="about">
				
			<Timeline mode="alternate">
				<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
				<Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
				<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
				beatae vitae dicta sunt explicabo.
				</Timeline.Item>
				<Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
				<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
				<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
				Technical testing 2015-09-01
				</Timeline.Item>
			</Timeline>

			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 10px 20%;
						display: flex;
						align-items: center;
						justify-content: space-between;
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