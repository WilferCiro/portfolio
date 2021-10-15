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
						height: calc(200px + 6vw);
						width: calc(200px + 6vw);
						border: calc(8px + 0.2vw) solid transparent;
						background-origin: border-box;
						background-clip: content-box, border-box;
						background-size: cover;
						box-sizing: border-box;
						box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
					}
					
					.headshot-1 {
						border-radius: 100%;
						background-image: url(/img/index/me.webp), linear-gradient(to bottom right, #11A8CD, #562b7c, #11A8CD);
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