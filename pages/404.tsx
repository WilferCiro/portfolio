/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React from "react";

// Antd
import { Result, Button } from "antd";
import Link from "next/link";

const View404 = () => {

	return (
		<section>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Link href="/">
						<a><Button type="primary">Back Home</Button></a>
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

export default React.memo(View404);