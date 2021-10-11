
// React and NextJS
import React, {useState} from 'react';

// Antd
import {
	Form,
	Input,
	Button,
	message
} from 'antd';


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

	return (
		<>
			<section id="contact">
				<div className="form">
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
				</div>
			</section>

			<style jsx>
				{`
					section {
						height: 100vh;
						padding: 10px 20%;
					}
					.form{
						width: 50%;
						margin: auto;
					}
				`}
			</style>
		</>
	)
}

export default React.memo(ContactSection)