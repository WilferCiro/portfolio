/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and React
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

// Custom
import MyHead from '@/components/MyHead'
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))
const FloatInfo = dynamic(() => import('@/components/FloatInfo'))
const ParticlesBG = dynamic(() => import('@/components/ParticlesBG'))

import { theme } from '../styles/theme'
//import 'antd/dist/antd.dark.css';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO:
  // Mermar texto en proyectos
  // pasar de 4 a 3 en habilidades en tamaño más pequeño
  // Agregar código GITHUB
  return (
    <>
      <ParticlesBG />
      <MyHead />
      <Header />
      <FloatInfo />
        <div className="main-content">
          <Component {...pageProps} />
        </div>
      <Footer />

      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
          * {
            box-sizing: border-box;
          }
          body{
            margin: 0px;
            padding: 0px;
            color: ${theme.textPrimary};
            font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          .main-content{
            min-height: 100vh;
          }
					section {
						min-height: 100vh;
						padding: 100px 20% 10px 20%;
					}
					@media (min-width: 768px) and (max-width: 990px) {
						section {
							padding: 100px 20px;
							display: block;
							text-align: center;
						}
					}
					@media (max-width: 767px) {
						section{
							padding: 20px 15px;
						}
					}
        `}
      </style>
    </>
  )
}
export default MyApp
