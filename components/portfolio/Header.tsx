/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React, { useRef } from 'react'
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

	const menu = useRef<any>();

	const openMenu = () => {
		menu.current?.showModal();
	}

	const onClickModal = (event: any) => {
		if (event.target === menu.current) {
			menu.current?.close();
		}
	}

	const closeMenu = () => {
		menu.current?.close();
	}

	return (
		<>
			<header>
				<Logo />
				<div className="left-icons">
					<button onClick={openMenu}><MenuIcon /> Menú</button>

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
			
			<dialog ref={menu} className="menu-dialog" onClick={onClickModal}>
				<ul className="menu">
					<li>
						<a href="#" onClick={closeMenu}>Inicio</a>
					</li>
					<li>
						<a href="#about" onClick={closeMenu}>Sobre mi</a>
					</li>
					<li>
						<a href="#projects" onClick={closeMenu}>Mis proyectos</a>
					</li>
					<li>
						<a href="#skills" onClick={closeMenu}>Mis skills</a>
					</li>
					<li>
						<a href="#contact" onClick={closeMenu}>Contactame</a>
					</li>
				</ul>
			</dialog>

			<style jsx>{headerStyle}</style>
		</>
	)
}

export default React.memo(Header)