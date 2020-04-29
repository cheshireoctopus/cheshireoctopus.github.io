import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.overrideThemeStyles = () => ({
  body: {
    fontSize: '16px',
    border: '3px solid #950451',
  },
  'a.gatsby-resp-image-link': {
    backgroundImage: 'none',
  },
  'span.tag': {
    border: '1px solid #950451',
    borderRadius: '2px',
    color: '#950451',
    fontSize: '12px',
    letterSpacing: '0.5px',
    marginRight: '8px',
    padding: '3px 12px',
  },
  'span.tag a': {
    backgroundImage: 'none',
  },
  'code.language-text': {
    background: 'rgba(255, 229, 100, 0.2)',
  },
  'div.gatsby-highlight': {
    marginBottom: '1.58em',
  },
  'div.gatsby-highlight pre': {
    borderRadius: '3px',
    margin: '0px',
  },
})

const typography = new Typography(oceanBeachTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
