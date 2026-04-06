export default function EarlyAlphaSignup() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-md bg-linear-to-r from-pink-600 via-fuchsia-600 to-purple-700 px-6 py-12 text-center sm:px-8 sm:py-16">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Sign up for early Alpha
          </h2>
          <p className="mx-auto mb-8 max-w-full text-lg leading-relaxed font-light text-white/80 sm:mb-10 sm:max-w-2xl sm:text-2xl">
            Subscribe now to get early alpha from our creators and
            <br className="hidden sm:block" />
            10X your portfolio
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Sign up now"
              className="w-full rounded-md bg-white/70 px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none sm:w-80"
            />

            <button className="w-full cursor-pointer rounded-md bg-get-alpha px-6 py-3 font-medium text-white transition hover:bg-indigo-800 sm:w-auto">
              Get early Alpha
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
