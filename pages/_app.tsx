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

// Styles
import { style } from '@/styles/app'
//import '/public/css/antd-dark.css';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import Layout from '@/components/portfolio/Layout'
//import '@/styles/antd.css'
import { getIsLight } from 'services/cookies'

const isLight = getIsLight()

const themes = {
  light: '/css/antd-light.css',
  dark: '/css/antd-dark.css',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeSwitcherProvider
        defaultTheme={isLight ? "light" : "dark"}
        themeMap={themes}
      >
        <Layout>
          <>
            <MyHead />
            <Header />
            <FloatInfo />
            <div className="main-content">
              <Component {...pageProps} />
            </div>
            <Footer />

            <style global jsx>{style}</style>
          </>
        </Layout>
      </ThemeSwitcherProvider>
    </>
  )
}
export default MyApp
