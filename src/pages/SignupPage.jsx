import { useState } from 'react'
import { Link } from 'react-router-dom'

function SignupPage() {
  const [passwordMismatch, setPasswordMismatch] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    setPasswordMismatch(formData.get('password') !== formData.get('confirmPassword'))
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 px-5 py-10">
      <section className="w-full max-w-md" aria-labelledby="signup-heading">
        <Link className="inline-flex text-xl font-bold tracking-tight text-slate-50" to="/">
          Past<span className="text-orange-500">4</span>
        </Link>

        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-xl shadow-slate-950/25 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Join Past4</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-50" id="signup-heading">
            Create your account.
          </h1>
          <p className="mt-3 text-slate-400">Set up your Past4 account and start playing.</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-slate-200" htmlFor="signup-username">
                Username
              </label>
              <input
                autoComplete="username"
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                id="signup-username"
                minLength="3"
                name="username"
                placeholder="Choose a username"
                required
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-200" htmlFor="signup-email">
                Email
              </label>
              <input
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                id="signup-email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-200" htmlFor="signup-password">
                Password
              </label>
              <input
                autoComplete="new-password"
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                id="signup-password"
                minLength="8"
                name="password"
                placeholder="Create a password"
                required
                type="password"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-200" htmlFor="signup-confirm-password">
                Confirm Password
              </label>
              <input
                autoComplete="new-password"
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                aria-describedby={passwordMismatch ? 'signup-confirm-password-error' : undefined}
                aria-invalid={passwordMismatch}
                id="signup-confirm-password"
                minLength="8"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                type="password"
              />
              {passwordMismatch && (
                <p className="mt-2 text-sm text-orange-300" id="signup-confirm-password-error">
                  Passwords do not match.
                </p>
              )}
            </div>

            <button
              className="w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link className="font-semibold text-orange-400 transition hover:text-orange-300" to="/login">
              Sign in
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

export default SignupPage
