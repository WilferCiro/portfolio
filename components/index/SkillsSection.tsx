

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


const SkillsSection = () => {
	return (
		<>
			<section id="skills">
				<Carousel>
					<div>
						<Row gutter={[16, 16]}>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="Javascript" description="React JS, next JS, express" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="Python" description="Django, FastApi, Desktop, OpenCV" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="Dart" description="Flutter mobile" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="C && C++" description="Desktop, arduino, GTK, QT" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="GNU/Linux" description="Ubuntu based, Arch based" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="SQL" description="MySQL, PostgreSQL" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="No SQL" description="Mongo DB, Elastic Search" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="Develop tools" description="Git, Asana, Jira" />
								</Card>
							</Col>
						</Row>
					</div>

					<div>

						<Row gutter={[16, 16]}>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="HDL" description="VHDL, Verilog" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
								>
									<Meta title="Embedded systems" description="Arduino, ESP32, raspberry pi" />
								</Card>
							</Col>
							<Col xs={12} md={6}>
								<Card
									hoverable
									style={{ width: "100%", height: "100%" }}
									cover={<Image width={320} height={180} alt="example" src="/img/index/mips/img1.png" />}
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
						min-height: 100vh;
						padding: 10px 20%;
						align-items: center;
						margin: 40px auto;
					}
					@media (max-width: 767px) {
						.form {
							width: 100%;
						}
						section{
							padding: 20px 15px;
						}
					}
				`}
			</style>
		</>
	)
}

export default React.memo(SkillsSection)