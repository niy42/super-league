export default function EarlyAlphaSignup() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-xs bg-linear-to-r from-pink-600 via-fuchsia-600 to-purple-700 px-8 py-16 text-center">
          <h2 className="mb-4 text-6xl font-semibold tracking-tight text-white">
            Sign up for early Alpha
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-2xl font-light text-white/80">
            Subscribe now to get early alpha from our creators and
            <br />
            10X your portfolio
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="email"
              placeholder="Sign up now"
              className="w-105 max-w-full rounded-xs bg-white/70 px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
            />

            <button className="cursor-pointer rounded-xs bg-get-alpha px-6 py-3 font-medium text-white transition hover:bg-indigo-800">
              Get early Alpha
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
