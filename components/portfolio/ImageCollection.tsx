/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React, {useState} from 'react';
import Image from 'next/image';

interface Props {
	images: Array<string>
}

const ImageCollection = ({images}: Props) => {
	const [visible, setVisible] = useState(false);
	return (
	<>
		<Image
			alt="Project Image"
			width={"1365"}
			height={"613"}
			layout={"responsive"}
			src={images[0]}
			onClick={() => setVisible(true)}
		/>
		{/* <div style={{ display: 'none' }}>
			<Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
				{
					images.map((image: string, index: number) => {
						return <Image key={"image-" + index} src={image} alt={"Project image"} />
					})
				}
			</Image.PreviewGroup>
			</div> */}
	</>
	);
}

export default React.memo(ImageCollection)