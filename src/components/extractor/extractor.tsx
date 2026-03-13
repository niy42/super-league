import NFTCards from "../../assets/svg/nft-cards.svg?react";

export default function ExtricatorHero() {
  return (
    <>
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-12 py-6">
        <h1 className="text-xl font-semibold">Extricator.</h1>

        <div className="flex gap-10 text-gray-300">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Gallery
          </a>
          <a href="#" className="hover:text-white">
            Roadmap
          </a>
        </div>
      </nav>

      <section className="relative mt-20 flex flex-col items-center justify-center gap-8 overflow-hidden text-center">
        <div className="absolute inset-0 z-1 bg-linear-to-b from-superleague via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-125 w-225 bg-[radial-gradient(circle,rgba(236,72,153,0.25)_0%,rgba(236,72,153,0.1)_40%,transparent_70%)] blur-3xl" />
        </div>

        <div className="relative z-10 w-full">
          <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[linear-gradient(#ffffff0f_3px,transparent_4px),linear-gradient(90deg,#ffffff0f_3px,transparent_4px)] mask-[radial-gradient(ellipse_50%_70%_at_50%_52%,#000_40%,transparent_70%)] bg-size-[40px_40px]" />
          <div className="absolute top-24 left-1/2 h-87.5 w-175 -translate-x-1/2 bg-[radial-gradient(circle,rgba(236,72,153,0.35)_0%,rgba(236,72,153,0.15)_40%,transparent_70%)] opacity-80 blur-3xl" />

          <h1 className="relative mx-auto max-w-4xl text-6xl leading-tight font-semibold">
            Get Ready to Own
            <br />a Piece of History
          </h1>

          <p className="relative mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Join the Ranks of Visionary Collectors and Own a Piece of History
          </p>

          <div className="relative mt-8 flex justify-center gap-4">
            <button className="cursor-pointer rounded-xs bg-purple-600 px-14 py-3 hover:bg-purple-700">
              Explore
            </button>

            <button className="cursor-pointer rounded-xs bg-white/10 px-14 py-3 hover:bg-white/20">
              Go to market
            </button>
          </div>
        </div>
        <NFTCards className="relative z-10 h-auto w-auto" />
      </section>
    </>
  );
}
