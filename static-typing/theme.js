import createTheme from 'spectacle/lib/themes/default'

const colors = {
  primary: "#2b303b",
  secondary: "#c0c5ce",
  tertiary: "#ebcb8b",
  quartenary: "#65737e",
}

const fonts = {
  primary: `Lato, "Open Sans", Helvetica, sans-serif`,
  secondary: "Bitter, Georgia, serif",
  monospace: `Menlo, Monaco, monospace`,
}

const builtTheme = createTheme(colors, fonts)

builtTheme.screen.components.text.color = colors.secondary
builtTheme.screen.components.heading.h3.color = colors.tertiary
builtTheme.screen.components.link.color = "#8fa1b3"

builtTheme.screen.components.code = {
  ...builtTheme.screen.components.code,
  color: "#343d46",
  fontFamily: fonts.monospace,
  backgroundColor: "#a7adba",
  padding: "0 .1rem",
  lineHeight: .8,
}

export default builtTheme
