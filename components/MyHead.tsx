/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React from "react";
import Head from 'next/head';


const MyHead = () => {

	const defaultDescription = "Hello! Welcome to my personal portfolio, I hope the information presented here will be of use to you.";

	const urlPage = "https://wilciro.vercel.app/";
	const imageDefault = urlPage + "/image-meta.png";
	const nombrePage = "Wilfer Ciro";
	const lemaPage = "Portfolio";


	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": urlPage + "#website",
				"url": urlPage,
				"name": nombrePage,
				"description": defaultDescription,
				"inLanguage": "es-CO"
			},
			{
				"@type": "ImageObject",
				"@id": urlPage + "#primaryimage",
				"inLanguage": "es-CO",
				"url": urlPage + "/app-icon-512x512.png",
				"width": 512,
				"height": 512
			},
			{
				"@type": "WebPage",
				"@id": urlPage + "/#webpage",
				"url": urlPage + "/",
				"name": "Inicio :: " + nombrePage,
				"isPartOf": {
					"@id": urlPage + "#website"
				},
				"primaryImageOfPage": {
					"@id": urlPage + "#primaryimage"
				},
				"datePublished": "2021-10-10T02:30:36+00:00",
				"dateModified": "2021-10-10T18:57:03+00:00",
				"inLanguage": "es-CO",
				"potentialAction": [
					{
						"@type": "ReadAction",
						"target": [
							urlPage
						]
					}
				]
			}
		]
	}

	return (
		<Head>
			<title>Wilfer Ciro portfolio</title>

			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			
			<meta name="author" content="Wilfer Daniel Ciro Maya"/>
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

			<meta name="theme-color" content="#11A8CD" />

			<meta httpEquiv="Expires" content="0"/>
			<meta httpEquiv="Last-Modified" content="0"/>
			<meta httpEquiv="Cache-Control" content="no-cache, mustrevalidate"/>
			<meta httpEquiv="Pragma" content="no-cache"/>
			<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

			<meta property="og:type" content="website"/>
			<meta property="og:locale" content="es_ES"/>
			<meta property="og:url" content={urlPage}/>

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={urlPage} />

			<link rel="canonical" href={urlPage} />

			<meta name="keywords" content="Wilfer Daniel Ciro Maya, developer, desarrollador fullstack, portfolio, portafolio"/>

			<meta property="og:title" content={nombrePage + " : " + lemaPage}/>
			<meta property="og:site_name" content={nombrePage + " : " + lemaPage}/>
			<meta name="twitter:title" content={nombrePage + " : " + lemaPage} />
			<meta name="title" content={nombrePage + " : " + lemaPage} />
			<title>{nombrePage + " : " + lemaPage}</title>
			
			<meta property="twitter:description" content={defaultDescription}/>
			<meta property="og:description" content={defaultDescription}/>
			<meta name="description" content={defaultDescription}/>
			
			<meta property="twitter:image:src" content={imageDefault}/>
			<meta property="og:image" content={imageDefault}/>

			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
		</Head>
	);
}

export default MyHead;