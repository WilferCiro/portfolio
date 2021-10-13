/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

const MePhoto = () => {

	return (
		<>
			<div className="container">
				<div className="box">
					<div className="spin-container">
					<div className="shape">
						<div className="bd"></div>
					</div>
					</div>
				</div>
			</div>

			<style jsx>
				{`					
					.container {
						display: flex;
						align-items: center;
						justify-content: center;
						overflow: hidden;
						padding: 20px;
					}					
					.box {
						width: 50vmin;
						height: 50vmin;
						position: relative;
					}					
					.spin-container {
						width: 100%;
						height: 100%;
						-webkit-animation: spin 12s linear infinite;
								animation: spin 12s linear infinite;
						position: relative;
					}
					
					.shape {
						width: 100%;
						height: 100%;
						transition: border-radius 1s ease-out;
						border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
						-webkit-animation: morph 8s ease-in-out infinite both alternate;
								animation: morph 8s ease-in-out infinite both alternate;
						position: absolute;
						overflow: hidden;
						z-index: 5;
					}
					
					.bd {
						width: 142%;
						height: 142%;
						position: absolute;
						left: -21%;
						top: -21%;
						background: url(/img/index/me.webp);
						background-size: 80%;
						background-position: center center;
						display: flex;
						color: #003;
						font-size: 5vw;
						font-weight: bold;
						align-items: center;
						justify-content: center;
						text-align: center;
						text-transform: uppercase;
						animation: spin 12s linear infinite reverse;
						opacity: 1;
						z-index: 2;
					}
					
					@-webkit-keyframes morph {
						0% {
							border-radius: 40% 60% 60% 40%/60% 30% 70% 40%;
						}
						100% {
							border-radius: 40% 60%;
						}
					}
					
					@keyframes morph {
						0% {
							border-radius: 40% 60% 60% 40%/60% 30% 70% 40%;
						}
						100% {
							border-radius: 40% 60%;
						}
					}
					@-webkit-keyframes spin {
						to {
							transform: rotate(1turn);
						}
					}
					@keyframes spin {
						to {
							transform: rotate(1turn);
						}
					}

					@media (max-width: 767px) {
						.box{
							width: 70vmin;
							height: 70vmin;
						}
					}
				`}	
			</style>	
		</>
	)
}

export default React.memo(MePhoto)