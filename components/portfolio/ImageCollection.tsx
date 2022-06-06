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
			<div className='image-font'>
				<div className="pic">
					<Image
						alt="Project Image"
						width={"1365"}
						height={"850"}
						layout={"responsive"}
						src={images[0]}
						onClick={() => setVisible(true)}
					/>
				</div>
			</div>
			
			{/* <div style={{ display: 'none' }}>
				<Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
					{
						images.map((image: string, index: number) => {
							return <Image key={"image-" + index} src={image} alt={"Project image"} />
						})
					}
				</Image.PreviewGroup>
				</div> */}
			<style jsx>{`
				:root{
				}
				.image-font {	
					--size: 300px;				
					background-image: url('img/backImage.png');
					background-size: 100%;
					width: var(--size);
					height: var(--size);
				}
				.pic {
					position: absolute;
					width: calc(var(--size) / 1.7);
					margin: auto;
					left: calc(var(--size) / 4);
					top: calc(var(--size) / 3);
				}
			`}</style>
		</>
	);
}

export default React.memo(ImageCollection)