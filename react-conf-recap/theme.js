import createTheme from 'spectacle/lib/themes/default'

const colors = {
  primary: "#231F20",
  secondary: "#c0c5ce",
  tertiary: "#5FC9EF",
  quartenary: "#294C5A",
}

const fonts = {
  primary: `"Helvetica Neue", sans-serif`,
  secondary: `"Helvetica Neue", Bitter, Georgia, serif`,
  tertiary: `"Fira Code", Menlo, Monaco, monospace`,
}

const builtTheme = createTheme(colors, fonts)

builtTheme.screen.components.text.color = colors.secondary
builtTheme.screen.components.heading.h3.color = colors.tertiary
builtTheme.screen.components.link.color = "#8fa1b3"

builtTheme.screen.components.codePane.code.fontFamily = fonts.tertiary
builtTheme.screen.components.codePane.code.fontSize = "1.5em"

export default builtTheme
