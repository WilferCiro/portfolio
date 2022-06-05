/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and NextJS
import React, {useEffect, useState} from 'react';

// Antd
import {
	Form,
	Input,
	message,
	Divider,
	Row,
	Col,
	List,
	Avatar,
	Card
} from 'antd';
import { MailFilled, PhoneFilled } from '@ant-design/icons';

// Animations
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom
import useTranslation from 'next-translate/useTranslation';
import { suscribe } from 'services/subscribe.service';
import Button from '../controls/Button';

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
			body: "+57 317 358 7462",
			icon: <PhoneFilled />
		}
	]

	return (
		<>
			<section id="contact">
					<div className="form">
						<h3>{t("contact_title")}</h3>
						<Divider />
						<Card>
							<Row gutter={[30, 16]}>
								<Col xs={24} md={12}>
												<Input placeholder={t("contact_input-email")} />
											
												<Input placeholder={t("contact_input-name")} />
											
												<Input placeholder={t("contact_input-subject")} />
											
												<Input.TextArea placeholder={t("contact_input-message")} />
											
												<Button text={t("submit")} />
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
						</Card>
					</div>
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