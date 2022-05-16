/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'
import dynamic from 'next/dynamic'

// Custom
const Logo = dynamic(() => import('@/components/icons/Logo'))

// Animations

// Translate
import { headerStyle } from '@/styles/layout/header'


const Header = () => {


	return (
		<>
			<header>
				<Logo />
				<button className="">Menú</button>
			</header>

			<style jsx>{headerStyle}</style>
		</>
	)
}

export default React.memo(Header)