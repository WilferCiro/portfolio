/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

const MePhoto = () => {

	return (
		<>
			<div className="headshot headshot-1"></div>

			<style jsx>
				{`
					.headshot {
						flex-shrink: 0;
						margin: 20px;
						height: calc(250px + 6vw);
						width: calc(250px + 6vw);
						background-origin: border-box;
						background-clip: content-box, border-box;
						background-size: cover;
						box-sizing: border-box;
					}
					
					.headshot-1 {
						background-image: url(/img/index/me2.webp);
					}
					@media (max-width: 767px) {
						.headshot {
							height: calc(250px + 6vw);
							width: calc(250px + 6vw);
						}
					}
				`}	
			</style>	
		</>
	)
}

export default React.memo(MePhoto)