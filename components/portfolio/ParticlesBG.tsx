/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'


const ParticlesBG = () => {


	return (
		<>
			<ul className="squares">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<style jsx>
				{`					
				
				.squares{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					overflow: hidden;
				}
				.squares li{
					position: absolute;
					display: block;
					list-style: none;
					width: 20px;
					height: 20px;
					background: rgba(255, 255, 255, 0.1);
					animation: animate 15s linear infinite;
					bottom: -150px;
				}
				.squares li:nth-child(1){
					left: 25%;
					width: 80px;
					height: 80px;
					animation-delay: 0s;
				}
				.squares li:nth-child(2){
					left: 10%;
					width: 20px;
					height: 20px;
					animation-delay: 2s;
					animation-duration: 12s;
				}
				.squares li:nth-child(3){
					left: 70%;
					width: 20px;
					height: 20px;
					animation-delay: 4s;
				}
				.squares li:nth-child(4){
					left: 40%;
					width: 60px;
					height: 60px;
					animation-delay: 0s;
					animation-duration: 18s;
				}
				.squares li:nth-child(5){
					left: 65%;
					width: 20px;
					height: 20px;
					animation-delay: 0s;
				}
				.squares li:nth-child(6){
					left: 75%;
					width: 110px;
					height: 110px;
					animation-delay: 3s;
				}
				.squares li:nth-child(7){
					left: 24%;
					width: 150px;
					height: 150px;
					animation-delay: 7s;
				}
				.squares li:nth-child(8){
					left: 50%;
					width: 25px;
					height: 25px;
					animation-delay: 15s;
					animation-duration: 45s;
				}
				.squares li:nth-child(9){
					left: 20%;
					width: 15px;
					height: 15px;
					animation-delay: 2s;
					animation-duration: 35s;
				}
				.squares li:nth-child(10){
					left: 85%;
					width: 150px;
					height: 150px;
					animation-delay: 0s;
					animation-duration: 11s;
				}
				.squares li:nth-child(11){
					left: 5%;
					width: 100px;
					height: 100px;
					animation-delay: 38s;
				}
			
				@keyframes animate {
					0% {
						transform: translateY(0) rotate(0deg);
						opacity: 0;
						border-radius: 0;
					}
					20% {
						opacity: 0;
					}
					30% {
						opacity: 1;
					}
					100% {
						transform: translateY(-1000px) rotate(720deg);
						opacity: 0;
						border-radius: 15%;
					}
				}

				`}
			</style>
		</>
	)
}

export default React.memo(ParticlesBG)