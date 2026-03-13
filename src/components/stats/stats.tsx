export default function Stats() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-20 py-32">
        <div className="grid place-items-start gap-4">
          <p className="text-sm text-pink-500">Track record</p>

          <h2 className="text-5xl leading-tight font-semibold">
            Positive track records
            <br />
            and milestones
            <br />
            Achieved
          </h2>
        </div>

        <div className="grid place-items-start gap-10">
          <p className="max-w-lg text-gray-400">
            Not only do our exclusive NFTs offer a unique opportunity for
            digital ownership, they also provide a platform for artists to
            showcase their creativity and connect with a community of
            like-minded collectors and enthusiasts.
          </p>

          <div className="grid grid-cols-3 gap-14 text-center">
            <div>
              <h3 className="text-3xl font-semibold">24k+</h3>
              <p className="text-gray-400">Collections</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">18k+</h3>
              <p className="text-gray-400">Auctions</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">10k+</h3>
              <p className="text-gray-400">Artists</p>
            </div>
          </div>

          <button className="cursor-pointer rounded-md border border-white/20 px-8 py-3 text-left hover:bg-white/10">
            See Track records
          </button>
        </div>
      </section>
    </>
  );
}
