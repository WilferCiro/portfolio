/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

// Style
import { style } from '@/styles/index/me-photo'

const MePhoto = () => {

	return (
		<>
			<div className="headshot headshot-1"></div>

			<style jsx>{style}</style>	
		</>
	)
}

export default React.memo(MePhoto)