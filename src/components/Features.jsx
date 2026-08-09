const features = [
  {
    number: '01',
    title: 'Quick Setup',
    description: 'Create a room in seconds.',
  },
  {
    number: '02',
    title: 'Play Together',
    description: 'Invite friends with one simple room code.',
  },
  {
    number: '03',
    title: 'Browser Games',
    description: 'No downloads. Just open the room and play.',
  },
]

function Features() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/30" id="features">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Less setup. More game time.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article className="rounded-xl border border-slate-700 bg-slate-800 p-6" key={feature.number}>
              <span className="text-sm font-bold text-orange-400">{feature.number}</span>
              <h3 className="mt-8 text-xl font-semibold text-slate-50">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
