import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import {TotalProvider} from '@context'
import {store} from '@redux'

import App from './App.tsx'

import './base/styles/App.css'
import {Provider} from 'react-redux'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <TotalProvider>
        <App />
      </TotalProvider>
    </Provider>
  </BrowserRouter>
)
