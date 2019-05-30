import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.overrideThemeStyles = () => ({
  "a.gatsby-resp-image-link": {
    backgroundImage: 'none',
  },
  "span.tag": {
    border: '1px solid #950451',
    borderRadius: '2px',
    color: '#950451',
    fontSize: '12px',
    letterSpacing: '0.5px',
    marginRight: '8px',
    padding: '3px 12px',
  },
})

const typography = new Typography(oceanBeachTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
