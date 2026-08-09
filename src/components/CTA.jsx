function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="rounded-2xl bg-orange-500 px-6 py-12 text-center shadow-xl shadow-orange-950/20 sm:px-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-950/70">It&apos;s past 4.</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to play?</h2>
        <button
          className="mt-8 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-2 focus:outline-offset-2 focus:outline-slate-950"
          type="button"
        >
          Create Your First Room
        </button>
      </div>
    </section>
  )
}

export default CTA
