import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import {TotalProvider} from '@context'

import App from './App.tsx'

import './base/styles/App.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <TotalProvider>
      <App />
    </TotalProvider>
  </BrowserRouter>
)
