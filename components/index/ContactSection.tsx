
// React and NextJS
import React, {useState} from 'react';

// Antd
import {
	Form,
	Input,
	Button,
	message,
	Divider,
	Row,
	Col,
	List,
	Avatar
} from 'antd';
import { theme } from '@/styles/theme';
import { HomeOutlined, MailFilled, PhoneFilled } from '@ant-design/icons';


const ContactSection = () => {

	const [form] = Form.useForm()
	const [loading, setLoading] = useState<boolean>(false);

	const onFinish = async (values: any) => {
		setLoading(true);
		let data = await fetch("/api/subscribe", {
			"method": "POST",
			"headers": { "content-type": "application/json" },
			"body": JSON.stringify(values)
		})

		if (data.status === 200) {
			form.resetFields()
			message.success("Mensaje enviado con éxito")
		}
		else{
			message.error("Ocurrió un error al enviar el mensaje, vuelva a intentar")
		}
		setLoading(false);
	}

	const onFinishFailed = (values: any) => {
		
	}

	const data = [
		{
			title: 'Email',
			body: "wilcirom@gmail.com",
			icon: <MailFilled />
		},
		{
			title: 'Phone',
			body: "3173587462",
			icon: <PhoneFilled />
		},
		{
			title: 'Address',
			body: "Colombia, Quimbaya Quindío, ciudadela mz 20 # 28",
			icon: <HomeOutlined />
		}
	]

	return (
		<>
			<section id="contact">
				<div className="form">
					<h3>Contact Me</h3>
					<Divider />
					<Row gutter={[30, 16]}>
						<Col xs={24} md={12}>
							<Form
								form={form}
								name="basic"
								layout="vertical"
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete="off"
								>
								<Form.Item
									label="E mail"
									name="email"
									rules={[{ required: true, message: 'Please input your email!' }, { type: "email", message: "Please input a valid email!"}]}
								>
									<Input placeholder="Input your email" />
								</Form.Item>
								<Form.Item
									label="Name"
									name="name"
									rules={[{ required: true, message: 'Please input your name!' }, {min: 8}]}
								>
									<Input placeholder="Input your name" />
								</Form.Item>
								<Form.Item
									label="Subject"
									name="subject"
									rules={[{ required: true, message: 'Please input your subject!' }, {min: 8}]}
								>
									<Input placeholder="Input your subject" />
								</Form.Item>
								<Form.Item
									label="Message"
									name="message"
									rules={[{ required: true, message: 'Please input your Message!' }, {min: 20}]}
								>
									<Input.TextArea placeholder="Input your message" />
								</Form.Item>

								<Form.Item>
									<Button type="primary" htmlType="submit" block shape="round" loading={loading}>
										Submit
									</Button>
								</Form.Item>
							</Form>
						</Col>
						<Col xs={24} md={12}>
							<div className="data-list">
								<List
									itemLayout="horizontal"
									dataSource={data}
									renderItem={(item: any) => (
										<List.Item>
											<List.Item.Meta
											avatar={<Avatar icon={item.icon} />}
											title={item.title}
											description={item.body}
											/>
										</List.Item>
									)}
								/>
							</div>
						</Col>
					</Row>
				</div>
			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 10px 20%;
					}
					h3 {
						color: ${theme.primary}
					}
					.data-list{
						width: 80%;
						margin: auto;
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

export default React.memo(ContactSection)