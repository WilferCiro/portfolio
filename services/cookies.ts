import { ENUM } from "@/constants/enum"
import Cookies from "js-cookie"

export const getIsLight = () => {
    return Cookies.get(ENUM.light_theme) === "true"
}

export const setIsLight = (light: string) => {
    Cookies.set(ENUM.light_theme, light)
}