import { useEffect, useState } from "react";

export default function Stats() {
  const stats = [
    { label: "Collections", value: 24000 },
    { label: "Auctions", value: 18000 },
    { label: "Artists", value: 10000 },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = stats.map((stat) => stat.value / steps);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      setCounts((prev) =>
        prev.map((c, i) =>
          Math.min(Math.round(c + increment[i]), stats[i].value),
        ),
      );
      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:gap-20 sm:px-8 sm:py-32 lg:grid-cols-2">
      {/* Left Column */}
      <div className="grid place-items-start gap-4">
        <p className="text-sm text-pink-500">Track record</p>

        <h2 className="text-3xl leading-snug font-semibold sm:text-4xl sm:leading-tight md:text-5xl">
          Positive track records
          <br />
          and milestones
          <br />
          Achieved
        </h2>
      </div>

      {/* Right Column */}
      <div className="grid place-items-start gap-8 sm:gap-10">
        <p className="max-w-full text-sm text-gray-400 sm:max-w-lg sm:text-base">
          Not only do our exclusive NFTs offer a unique opportunity for digital
          ownership, they also provide a platform for artists to showcase their
          creativity and connect with a community of like-minded collectors and
          enthusiasts.
        </p>

        {/* Stats Grid with animated numbers */}
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-14">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                {counts[i].toLocaleString()}+
              </h3>
              <p className="text-sm text-gray-400 sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="w-full cursor-pointer rounded-md border border-white/20 px-6 py-3 text-center hover:bg-white/10 sm:w-auto sm:px-8">
          See Track records
        </button>
      </div>
    </section>
  );
}
