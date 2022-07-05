/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and NextJS
import React, {useEffect, useState} from 'react';

// Antd
import {
	Form,
	message,
} from 'antd';
import { MailFilled, PhoneFilled } from '@ant-design/icons';

// Animations
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom
import useTranslation from 'next-translate/useTranslation';
import { suscribe } from 'services/subscribe.service';
import Button from '../controls/Button';
import { useForm } from 'react-hook-form';

const ContactSection = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = (data : any) => console.log(data);
	
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
		},
		{
			title: "Dirección",
			body: "Armenia Quindío - Colombia",
			icon: <PhoneFilled />
		}
	]

	return (
		<>
			<section id="contact" className='clear-to-dark'>
				<div className="form">
					<h3>{t("contact_title")}</h3>
					<hr />
					<div className="contact-sep">				
						
						<div className="data-list">
							{
								data.map((item: any, index: number) => {
									return (
										<div key={"item-" + index} className="contact-item">
											<div className="contact-item-icon">
												{item.icon}
											</div>
											<div>
												<h4>{item.title}</h4>
												<p>{item.body}</p>
											</div>
										</div>
									)
								})
							}
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							{/* register your input into the hook by invoking the "register" function */}
							<input placeholder="Nombre" {...register("name", {required: true})} />
							{errors.name && <span>This field is required</span>}
							
							{/* include validation with required or other standard HTML validation rules */}
							<input placeholder="Correo electrónico" {...register("email", { required: true })} />
							{/* errors will return when field validation fails  */}
							{errors.email && <span>This field is required</span>}

							<textarea placeholder="Ingrese su mensaje" {...register("message", { required: true })} rows={5} />
							{errors.message && <span>This field is required</span>}
							
							<Button text={t("submit")} />
						</form>
					</div>
				</div>
			</section>

			<style jsx>
				{`
					section {
						height: auto;
						min-height: auto;
						padding-bottom: 150px;
					}
					.contact-item{
						display: flex;
						gap: 20px;
					}
					.contact-item-icon{
						background: var(--primary-color);
						width: 40px;
						height: 40px;
						text-align: center;
						border-radius: 100%;
						line-height: 40px;
						font-size: 22px;
					}
					h3 {
						color:  var(--primary-color);
					}
					.contact-sep{
						display: flex;						
						width: 80%;
						margin: auto;						
					}
					h4, p {
						margin: 0px;
					}
					.data-list{
						width: 50%;
						margin: auto;
						display: flex;
						flex-direction: column;
						gap: 20px;
					}
					form {
						display: flex;
						flex-direction: column;
						margin-top: 30px;
					}
					input, textarea {
						width: 100%;
						min-width: 350px;
						margin: 5px auto;
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