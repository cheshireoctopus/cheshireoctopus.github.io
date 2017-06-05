import 'highlight.js/styles/monokai-sublime.css';
import { createElement } from 'react'
import { render } from 'react-dom'
import Index from './components/index.jsx'

const app = createElement(Index)
const el = document.querySelector('.root')

render(app, el)
