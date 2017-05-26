import { createElement } from 'react'
import { render } from 'react-dom'
import App from './components/app.jsx'

const app = createElement(App)
const el = document.querySelector('.root')

render(app, el)
