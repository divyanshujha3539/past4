import { Link } from 'react-router-dom'

const statusDetails = {
  checking: {
    label: 'Checking...',
    color: 'bg-amber-400',
  },
  connected: {
    label: 'Backend connected',
    color: 'bg-emerald-400',
  },
  unavailable: {
    label: 'Backend unavailable',
    color: 'bg-rose-400',
  },
}

function Navbar({ backendStatus }) {
  const status = statusDetails[backendStatus] ?? statusDetails.checking

  return (
    <header className="border-b border-slate-800/80">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8"
      >
        <Link className="text-xl font-bold tracking-tight text-slate-50" to="/">
          Past<span className="text-orange-500">4</span>
        </Link>

        <div className="flex items-center gap-2 text-sm font-medium sm:gap-5">
          <span aria-live="polite" className="inline-flex items-center gap-1.5 text-[10px] text-slate-400 sm:gap-2 sm:text-xs" role="status">
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${status.color}`} />
            {status.label}
          </span>
          <Link className="text-slate-300 transition hover:text-slate-50" to="/login">
            Login
          </Link>
          <Link
            className="rounded-lg bg-orange-500 px-3 py-2 text-white transition hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400 sm:px-4"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
