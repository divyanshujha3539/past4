function Navbar() {
  return (
    <header className="border-b border-slate-800/80">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8"
      >
        <a className="text-xl font-bold tracking-tight text-slate-50" href="#top">
          Past<span className="text-orange-500">4</span>
        </a>

        <div className="flex items-center gap-3 text-sm font-medium sm:gap-5">
          <a className="text-slate-300 transition hover:text-slate-50" href="#login">
            Login
          </a>
          <a
            className="rounded-lg bg-orange-500 px-3 py-2 text-white transition hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400 sm:px-4"
            href="#signup"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
