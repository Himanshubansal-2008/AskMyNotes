import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <ToastProvider>
            <App />
        </ToastProvider>
    </ThemeProvider>,
)
