import {Route, Routes} from 'react-router-dom'

import {Template} from './template'

import * as PG from './pages'

import './base/styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PG.RedirectPage />} />
      <Route element={<Template />}>
        <Route path="main" element={<PG.MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
