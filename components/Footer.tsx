/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'


const Footer = () => {

	return (
		<>
			<footer>
				Designed and created by Wilfer Daniel Ciro Maya<br />
				&copy; 2021
			</footer>

			<style jsx>
				{`
					footer{
						text-align:center;
						padding: 40px 10px;
						margin-top: 40px;
					}
				`}	
			</style>	
		</>
	)
}

export default React.memo(Footer)