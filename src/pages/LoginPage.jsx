import { Link } from 'react-router-dom'

function LoginPage() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 px-5 py-10">
      <section className="w-full max-w-md" aria-labelledby="login-heading">
        <Link className="inline-flex text-xl font-bold tracking-tight text-slate-50" to="/">
          Past<span className="text-orange-500">4</span>
        </Link>

        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-xl shadow-slate-950/25 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Welcome back</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-50" id="login-heading">
            Welcome back.
          </h1>
          <p className="mt-3 text-slate-400">Sign in to get back to the game.</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-slate-200" htmlFor="login-email">
                Email
              </label>
              <input
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                id="login-email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-4">
                <label className="text-sm font-medium text-slate-200" htmlFor="login-password">
                  Password
                </label>
                <a className="text-sm font-medium text-orange-400 transition hover:text-orange-300" href="#forgot-password">
                  Forgot password?
                </a>
              </div>
              <input
                autoComplete="current-password"
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                id="login-password"
                name="password"
                placeholder="Enter your password"
                required
                type="password"
              />
            </div>

            <button
              className="w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Don&apos;t have an account?{' '}
            <Link className="font-semibold text-orange-400 transition hover:text-orange-300" to="/signup">
              Sign up
            </Link>
          </p>
        </div>

        <Link className="mt-6 inline-flex text-sm font-medium text-slate-400 transition hover:text-slate-200" to="/">
          ← Back to home
        </Link>
      </section>
    </main>
  )
}

export default LoginPage
