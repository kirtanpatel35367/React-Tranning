import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Noteprovider } from './Components/Task2/context/NoteContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Noteprovider>
    <App />
  </Noteprovider>

)
