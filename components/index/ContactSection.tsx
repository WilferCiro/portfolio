/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and NextJS
import React, {useEffect, useState} from 'react';

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
	Avatar,
	Card
} from 'antd';
import { HomeOutlined, MailFilled, PhoneFilled } from '@ant-design/icons';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import { useInView } from 'react-intersection-observer';

// Custom
import useTranslation from 'next-translate/useTranslation';
import { suscribe } from 'services/subscribe.service';

const ContactSection = () => {
	const { t } = useTranslation("home")

	const [form] = Form.useForm()
	const [loading, setLoading] = useState<boolean>(false);

	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const onFinish = async (values: any) => {
		setLoading(true);
		suscribe(values).then((result: any) => {
			if (result.status === 200) {
				form.resetFields()
				message.success("Mensaje enviado con éxito")
			}
			else{
				message.error("Ocurrió un error al enviar el mensaje, vuelva a intentar")
			}
			setLoading(false);
		})
	}

	const onFinishFailed = (values: any) => {
		
	}

	const data = [
		{
			title: t("email"),
			body: "wilcirom@gmail.com",
			icon: <MailFilled />
		},
		{
			title: t("phone"),
			body: "+57 317 358 xxxx",
			icon: <PhoneFilled />
		}
	]

	return (
		<>
			<section id="contact">
				<motion.div
					ref={ref}
					variants={animContainer}
					initial="hidden"
					animate={controls}
				>
					<div className="form">
						<h3>{t("contact_title")}</h3>
						<Divider />
						<Card>
							<Row gutter={[30, 16]}>
								<Col xs={24} md={12}>
									<motion.div variants={animItem}>
										<Form
											form={form}
											name="basic"
											layout="vertical"
											onFinish={onFinish}
											onFinishFailed={onFinishFailed}
											autoComplete="off"
										>
											<Form.Item
												label={t("email")}
												name="email"
												rules={[{ required: true, message: t("contact_error-email") }, { type: "email", message: "Ingrese un correo válido"}]}
											>
												<Input placeholder={t("contact_input-email")} />
											</Form.Item>
											<Form.Item
												label={t("name")}
												name="name"
												rules={[{ required: true, message: t("contact_error-name") }]}
											>
												<Input placeholder={t("contact_input-name")} />
											</Form.Item>
											<Form.Item
												label={t("subject")}
												name="subject"
												rules={[{ required: true, message: t("contact_error-subject") }]}
											>
												<Input placeholder={t("contact_input-subject")} />
											</Form.Item>
											<Form.Item
												label={t("message")}
												name="message"
												rules={[{ required: true, message: t("contact_error-message") }, {min: 20, message: "El mensaje debe contener al menos 20 caracteres"}]}
											>
												<Input.TextArea placeholder={t("contact_input-message")} />
											</Form.Item>

											<Form.Item>
												<Button type="primary" htmlType="submit" block shape="round" loading={loading}>
													{t("submit")}
												</Button>
											</Form.Item>
										</Form>
									</motion.div>
								</Col>
								<Col xs={24} md={12}>
									<div className="data-list">
										<motion.div variants={animItem}>
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
										</motion.div>
									</div>
								</Col>
							</Row>
						</Card>
					</div>
				</motion.div>
			</section>

			<style jsx>
				{`
					h3 {
						color:  var(--primary-color)
					}
					.data-list{
						width: 80%;
						margin: auto;
					}
					@media (max-width: 767px) {
						.form {
							width: 100%;
						}
					}
				`}
			</style>
		</>
	)
}

export default React.memo(ContactSection)