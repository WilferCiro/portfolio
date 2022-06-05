/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

// Style
import { style } from '@/styles/controls/tooltip'

interface Props {
    title: string,
    children: React.ReactChild
}

const Tooltip = ({title, children} : Props) => {

	return (
		<>
            <div className="tooltip">{children}
                <span className="tooltiptext">{title}</span>
            </div>

			<style jsx>{style}</style>	
		</>
	)
}

export default React.memo(Tooltip)