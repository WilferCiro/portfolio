/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React, {useEffect, useState} from 'react'


// Custom
import { Logo } from './icons/Logo'
import { theme } from '@/styles/theme'


const Header = () => {

	return (
		<>
			<header>
				<Logo />
				<div>
					<ul>
						<li>About me</li>
						<li>Projects</li>
						<li>Skills</li>
						<li>Contact</li>
						<li className="resume-btn">Resume</li>
					</ul>
				</div>
			</header>

			<style jsx>
				{`
					header{
						width: 100%;
						padding: 10px 50px;
						background: ${theme.bgPrimary};
						display: flex;
						justify-content: space-between;
						position: fixed;
						top: 0px;
						left: 0px;
						z-index: 2;
					}
					ul{
						margin: 0px;
						padding: 0px;
						list-style: none;
					}
					ul li {
						float: left;
						padding: 10px 20px;
						transition: all 0.3s;
					}
					ul li:hover {
						color: ${theme.primary};
						cursor: pointer;
					}
					.resume-btn{
						border: solid 1px ${theme.primary};
						border-radius: 2px;
					}
					.resume-btn:hover{
						background: ${theme.primary};
						color: white;
					}
				`}
			</style>
		</>
	)
}

export default React.memo(Header)