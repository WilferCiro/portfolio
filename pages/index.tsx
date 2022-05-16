/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and React
import dynamic from 'next/dynamic'
import type { NextPage } from 'next'

// Antd

// Custom
const IndexSection = dynamic(() => import('@/components/index/IndexSection'))
const AboutMeSection = dynamic(() => import('@/components/index/AboutMeSection'))
const ProjectsSection = dynamic(() => import('@/components/index/ProjectsSection'))
const SkillsSection = dynamic(() => import('@/components/index/SkillsSection'))
const ContactSection = dynamic(() => import('@/components/index/ContactSection'))

const Home: NextPage = () => {
  return (
    <>
      <IndexSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}

export default Home
