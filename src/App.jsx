import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 px-5 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-50">Page not found</h1>
        <p className="mt-3 text-slate-400">The page you&apos;re looking for isn&apos;t here.</p>
        <Link
          className="mt-7 inline-flex rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignupPage />} path="/signup" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
