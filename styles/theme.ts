
const isDark = true;

const themeLight = {
	"primary" : "#11A8CD",
	"textPrimary" : "#CCD6F6",
	"textSecundary" : "#76819D",
	"bgPrimary" : "#1E1E1E"
}

const themeDark = {
	"primary" : "#11A8CD",
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
