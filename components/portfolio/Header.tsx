/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React from 'react'
import dynamic from 'next/dynamic'

// Custom
const Logo = dynamic(() => import('@/components/icons/Logo'))

// Animations

// Translate
import { headerStyle } from '@/styles/layout/header'
import Link from 'next/link'
import { MenuIcon } from '../icons/Menu'


const Header = () => {
	const lang = "es"

	return (
		<>
			<header>
				<Logo />
				<div className="left-icons">
					<button><MenuIcon /> Menú</button>

					<div className="anchor">
						{
							lang === "es" ? 
							<Link href="/en">
								<a>
									<button>
										En
									</button>
								</a>
							</Link>
							:
							<Link href="/es">
								<a>
									<button>
										Es
									</button>
								</a>
							</Link>
						}
					</div>
				</div>
			</header>

			<style jsx>{headerStyle}</style>
		</>
	)
}

export default React.memo(Header)