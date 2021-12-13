// Created by Wilfer Daniel Ciro Maya - 2021

import { layoutStyle } from "@/styles/layout/layout";
import { ReactElement } from "react"
import { useThemeSwitcher } from "react-css-theme-switcher";


interface Props {
    children: ReactElement
}

const Layout = ({children}: Props ) => {

    const { status } = useThemeSwitcher();
    return (
        <>
            {
                status !== 'loaded' ?
                    <div className="bg">
                        <div className="arc"></div>
                        <h1><span>LOADING</span></h1>
                        <style jsx>
                            {layoutStyle}
                        </style>
                    </div>
                :
                null
            }
            {children}
        </>
    )
}

export default Layout