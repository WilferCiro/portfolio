/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React, {useState} from 'react';

// Antd
import {
	Image
} from 'antd'

interface Props {
	images: Array<string>
}

const ImageCollection = ({images}: Props) => {
	const [visible, setVisible] = useState(false);
	return (
	<>
		<Image
			style={{borderRadius: "5px", overflow: "hidden"}}
			alt="Project Image"
			preview={{ visible: false }}
			width={"100%"}
			height={"300"}
			src={images[0]}
			onClick={() => setVisible(true)}
		/>
		<div style={{ display: 'none' }}>
			<Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
				{
					images.map((image: string) => {
						return <Image key={Math.random()} src={image} alt={"Project image"} />
					})
				}
			</Image.PreviewGroup>
		</div>
	</>
	);
}

export default React.memo(ImageCollection)