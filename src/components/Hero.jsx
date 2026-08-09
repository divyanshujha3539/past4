function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
          Multiplayer, made simple
        </p>
        <h1 className="max-w-xl text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
          It&apos;s past 4.
          <span className="block text-orange-500">Time to play.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
          Create a private room, invite your friends, and enjoy quick multiplayer games together in your browser.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400"
            type="button"
          >
            Create Room
          </button>
          <button
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400"
            type="button"
          >
            Join Room
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-2xl shadow-slate-950/30 sm:p-7">
        <div className="flex items-center justify-between border-b border-slate-700 pb-5">
          <div>
            <p className="text-sm font-medium text-slate-400">Past4 room</p>
            <p className="mt-1 text-xl font-bold text-slate-50">Friday unwind</p>
          </div>
          <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-300">
            Waiting
          </span>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Room code</p>
            <p className="mt-2 text-2xl font-bold tracking-[0.2em] text-slate-50">AX7P</p>
          </div>
          <div className="rounded-xl bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tonight&apos;s game</p>
            <p className="mt-2 font-semibold text-slate-50">Tic Tac Toe</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Players · 3 joined</p>
          <ul className="mt-3 space-y-2" aria-label="Players in the room">
            {['Aryan', 'Sarah', 'Aman'].map((player) => (
              <li className="flex items-center justify-between rounded-lg bg-slate-900/40 px-3 py-2.5" key={player}>
                <span className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  {player}
                </span>
                <span className="text-xs text-slate-500">Ready</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
