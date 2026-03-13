import { Heart } from "lucide-react";
import { artworks } from "../constants";

export default function WeeklyArts() {
  return (
    <section className="px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-start justify-between">
          <h2 className="max-w-xl text-6xl leading-tight font-medium text-white">
            Amazing and Unique <br /> Arts for the week
          </h2>

          <div className="relative">
            {" "}
            <button className="relative top-15 -left-0.5 cursor-pointer rounded-xs bg-purple-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-purple-700">
              See all →
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {artworks.map((art) => (
            <div key={art.id} className="space-y-2 bg-transparent">
              <div className="relative">
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-100 w-full object-cover"
                />

                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-sm font-medium">
                  <Heart
                    size={16}
                    className="cursor-pointer fill-love text-love"
                  />
                  <p className="text-love">{art.likes}</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-art px-5 py-4">
                <div>
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
