import { Route, Routes } from 'react-router'
import './App.css'
import AuthPage from './pages/Auth/AuthPage'

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes - Public */}
        <Route path='/' element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
