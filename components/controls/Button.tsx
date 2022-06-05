/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

// Style
import { style } from '@/styles/controls/button'

interface Props {
    text: string,
	icon?: React.ReactChild
}

const Button = ({text, icon} : Props) => {

	return (
		<>
			<button>{icon && icon} {text}</button>

			<style jsx>{style}</style>	
		</>
	)
}

export default React.memo(Button)