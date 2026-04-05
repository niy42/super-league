import { Heart } from "lucide-react";
import { artworks } from "../constants";

export default function WeeklyArts() {
  return (
    <section className="px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-center">
          <h2 className="max-w-xl text-3xl leading-snug font-medium text-white sm:text-5xl sm:leading-tight md:text-6xl">
            Amazing and Unique <br /> Arts for the week
          </h2>

          <button className="self-start rounded-md bg-purple-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-purple-700 sm:self-auto">
            See all →
          </button>
        </div>

        {/* Artworks Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {artworks.map((art) => (
            <div key={art.id} className="space-y-2">
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-md border border-zinc-50/20">
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-60 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-72 md:h-64 lg:h-72"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-sm font-medium">
                  <Heart
                    size={16}
                    className="cursor-pointer fill-love text-love"
                  />
                  <p className="text-love">{art.likes}</p>
                </div>
              </div>

              {/* Info & Buy Button */}
              <div className="flex flex-col items-start justify-between rounded-md bg-art px-4 py-3 sm:flex-row sm:items-center">
                <div className="mb-2 sm:mb-0">
                  <p className="text-sm text-gray-300">{art.title}</p>
                  <p className="text-lg text-white">{art.price}</p>
                </div>

                <button className="cursor-pointer rounded bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
