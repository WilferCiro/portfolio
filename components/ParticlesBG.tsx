/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

// Particles
import Particles from 'react-tsparticles'


const ParticlesBG = () => {

	const particlesInit = (main: any) => {
	  //console.log(main);
  
	  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	};
  
	const particlesLoaded = (container: any) => {
	  //console.log(container);
	};

	return (
		<>
			<div className="particles">
				<Particles
				id="tsparticles"
				height={"90vh"}
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: "#000",
						},
					},
					fpsLimit: 60,
					interactivity: {
					detectsOn: "canvas",
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.1,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.1,
						},
					},
					},
					particles: {
						color: {
							value: "#11A8CD",
						},
						links: {
							color: "#11A8CD",
							distance: 150,
							enable: true,
							opacity: 0.1,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 100,
						},
						opacity: {
							value: 0.1,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 6,
						},
					},
					detectRetina: true,
				}}
				/>
			</div>
			<style jsx>
				{`					
				.particles{
					position: fixed;
					top: 0px;
					left: 0px;
					z-index: -1;
					width: 100%;
					height: 70vh;
				}
				@media (max-width: 767px) {		
					.particles{
						height: 100vh;
					}
				}
				`}
			</style>
		</>
	)
}

export default React.memo(ParticlesBG)