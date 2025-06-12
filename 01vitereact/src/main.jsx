import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
    return (
        <div>
            <h1>Welcome, {userName}!</h1>
        </div>
    )
}

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank',
    },
    'Click me '
)

createRoot(document.getElementById('root')).render(
  
    
    reactElement
  
)
