import { createRoot } from 'react-dom/client'

import { SocketProvider } from './core/socket/SocketContext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <SocketProvider>
    <App />
  </SocketProvider>,
)
