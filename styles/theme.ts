
const isDark = true;

const themeLight = {
	"primary" : "#800080",
	"textPrimary" : "#CCD6F6",
	"textSecundary" : "#76819D",
	"bgPrimary" : "#0A192F"
}

const themeDark = {
	"primary" : "#800080",
	"textPrimary" : "#0A192F",
	"textSecundary" : "#76819D",
	"bgPrimary" : "#CCD6F6"
}

export const theme = {
	"primary" : !isDark ? themeDark.primary : themeLight.primary,
	"textPrimary" : !isDark ? themeDark.textPrimary : themeLight.textPrimary,
	"textSecundary" : !isDark ? themeDark.textSecundary : themeLight.textSecundary,
	"bgPrimary" : !isDark ? themeDark.bgPrimary : themeLight.bgPrimary,
}
