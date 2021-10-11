import * as React from "react";

import { theme } from '@/styles/theme'

export const Logo = () => {

	return (
		<>
			<div className="logo">
				C
			</div>

			<style jsx>
				{`
					.logo{
						background: ${theme.primary};
						width: 40px;
						height: 40px;
						border-radius: 5px;
						text-align: center;
						font-size: 30px;
						font-weight: bold;
					}
				`}
			</style>
		</>
	)
};