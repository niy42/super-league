import { Send } from "lucide-react";
import Discord from "../../assets/svg/discord.svg?react";
import X from "../../assets/svg/x.svg?react";
import { team } from "../constants";

export default function MeetTeam() {
  return (
    <section className="overflow-hidden bg-team px-8 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-6xl leading-tight font-semibold text-white">
            Meet the Team
          </h2>

          <p className="max-w-md text-2xl leading-normal font-light text-gray-300">
            The Creators Who Are Pushing the Boundaries of Art and Technology
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-85 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 translate-y-6 gap-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <button className="cursor-pointer rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-lg transition hover:bg-white/20">
                  <Discord width={16} height={16} />
                </button>

                <button className="cursor-pointer rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-lg transition hover:bg-white/20">
                  <X width={16} height={16} />
                </button>

                <button className="cursor-pointer rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-lg transition hover:bg-white/20">
                  <Send size={16} />
                </button>
              </div>

              <div className="absolute right-0 bottom-6 left-0 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
