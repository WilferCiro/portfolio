/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React from "react";

// Antd
import { Result, Button } from "antd";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation'

function View404() {

	const { t } = useTranslation("404")

	return (
		<section>
			<Result
				status="404"
				title="404"
				subTitle={t("error")}
				extra={
					<Link href="/">
						<a><Button type="primary">{t("back-home")}</Button></a>
					</Link>					
				}
			/>

			<style jsx>{`
				section {
					padding-top: 80px;
				}
			`}</style>
		</section>
	)
}


export default View404;