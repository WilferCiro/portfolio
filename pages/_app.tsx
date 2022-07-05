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
import ParticlesBG from '@/components/portfolio/ParticlesBG';

// Styles
import { style } from '@/styles/app'
//import '/public/css/antd-dark.css';
//import '@/styles/antd.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <ParticlesBG />
        <MyHead />
        <FloatInfo />
        <Header />
        <div className="main-content">
          <Component {...pageProps} />
          <Footer />
        </div>

        <style global jsx>{style}</style>
    </>
  )
}
export default MyApp
