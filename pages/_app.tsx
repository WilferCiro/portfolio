/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and React
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

// Custom
import MyHead from '@/components/portfolio/MyHead'
const Header = dynamic(() => import('@/components/portfolio/Header'))
const Footer = dynamic(() => import('@/components/portfolio/Footer'))
const FloatInfo = dynamic(() => import('@/components/portfolio/FloatInfo'))
const ParticlesBG = dynamic(() => import('@/components/portfolio/ParticlesBG'))

// Styles
import { style } from '@/styles/app'
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

      <style global jsx>{style}</style>
    </>
  )
}
export default MyApp
