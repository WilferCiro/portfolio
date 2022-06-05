/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

// Style
import { style } from '@/styles/controls/tag'

interface Props {
    text: string
}

const Tag = ({text} : Props) => {

	return (
		<>
			<label className="tag">{text}</label>

			<style jsx>{style}</style>	
		</>
	)
}

export default React.memo(Tag)