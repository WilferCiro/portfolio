/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

// Style
import { style } from '@/styles/controls/button'

interface Props {
    text: string
}

const Button = ({text} : Props) => {

	return (
		<>
			<button>{text}</button>

			<style jsx>{style}</style>	
		</>
	)
}

export default React.memo(Button)