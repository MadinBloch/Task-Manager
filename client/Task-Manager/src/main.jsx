import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignInPage from './components/pages/SignInPage/SignInPage.jsx'
import SignUpPage from './components/pages/SignUpPage/SignUpPage.jsx'
import LandingPage from './components/pages/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route path="" element={<LandingPage  />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      </Route>
  </Routes>
  </BrowserRouter>
)
