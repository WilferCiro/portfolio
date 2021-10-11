

// NextJS and react
import React from 'react';
import Image from 'next/image'

// Antd
import {
	Row,
	Col,
	Card,
	Carousel
} from 'antd';
const { Meta } = Card;

// Custom
import { theme } from '@/styles/theme'

const SkillsSection = () => {
	return (
		<>
			<section id="skills">
				<Carousel>
					<div>
						<Row gutter={[16, 16]}>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="Javascript" description="React JS, next JS, express" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="Python" description="Django, FastApi, Desktop, OpenCV" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="Dart" description="Flutter mobile" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="C && C++" description="Desktop, arduino, GTK, QT" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="GNU/Linux" description="Ubuntu based, Arch based" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="SQL" description="MySQL, PostgreSQL" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="No SQL" description="Mongo DB, Elastic Search" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="Develop tools" description="Git, Asana, Jira" />
								</Card>
							</Col>
						</Row>
					</div>

					<div>

						<Row gutter={[16, 16]}>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="HDL" description="VHDL, Verilog" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="Embedded systems" description="Arduino, ESP32, raspberry pi" />
								</Card>
							</Col>
							<Col span={6}>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={<img alt="example" src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" />}
								>
									<Meta title="C#" description="Unity 3D" />
								</Card>
							</Col>
						</Row>

					</div>
				</Carousel>

			</section>

			<style jsx>
				{`
					section {
						height: 100vh;
						padding: 10px 20%;
						align-items: center;
					}
				`}
			</style>
		</>
	)
}

export default React.memo(SkillsSection)