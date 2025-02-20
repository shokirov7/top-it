import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from './i18n.js'
import { ThemeContext } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>,
)
