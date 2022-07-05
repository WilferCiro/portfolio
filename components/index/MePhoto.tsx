/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'

// Style
import { style } from '@/styles/index/me-photo'

//import { useLoader } from '@react-three/fiber';
//import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";

const MePhoto = () => {
	const fbx = useFBX("./models/box.fbx");
	//const fbx = useLoader(FBXLoader, './models/box.fbx')

	return (
		<>
			<div className="headshot headshot-1"></div>
			<style jsx>{style}</style>
		</>
	)
}

export default React.memo(MePhoto)