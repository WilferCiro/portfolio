/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and React
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

// Custom
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))
const FloatInfo = dynamic(() => import('@/components/FloatInfo'))
import { theme } from '../styles/theme'
import 'antd/dist/antd.dark.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <FloatInfo />
        <div className="main-content">
          <Component {...pageProps} />
        </div>
      <Footer />

      <style global jsx>
        {`
          * {
            box-sizing: border-box;
          }
          body{
            margin: 0px;
            padding: 0px;
            color: ${theme.textPrimary};
            background: ${theme.bgPrimary};
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          .main-content{
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}
export default MyApp
