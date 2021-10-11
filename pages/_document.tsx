/**
	* Creado por Wilfer Daniel Ciro Maya - 2021
**/

// NextJS libraries
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'


class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="es">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
						rel="stylesheet prefetch"
						as="style"
						type="text/css"
						crossOrigin="anonymous"
						/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6D478S" height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript>
				</body>
			</Html>
		)
	}
}

export default MyDocument
