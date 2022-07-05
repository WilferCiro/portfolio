/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

// Style
import { style } from '@/styles/controls/space'

interface Props {
    children: React.ReactChild[]
}

const Space : React.FC<Props> = ({children} : Props) => {

	return (
		<>
			<div className="space">
                {
                    children
                }
            </div>

			<style jsx>{style}</style>	
		</>
	)
}

export default React.memo(Space)