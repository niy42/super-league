import { Send } from "lucide-react";
import Discord from "../../assets/svg/discord.svg?react";
import X from "../../assets/svg/x.svg?react";

import { footerLinks } from "../constants";

const socials = [
  { icon: Discord, href: "#" },
  { icon: X, href: "#" },
  { icon: Send, href: "#" },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl border-t border-t-zinc-50/50 px-20 pt-20 pb-8 text-white">
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-5 space-y-6">
          <h2 className="text-4xl font-semibold">Extricator.</h2>

          <p className="max-w-xs text-2xl leading-normal font-light text-gray-300">
            Join the Ranks of Visionary Collectors and Own a Piece of History
          </p>

          <div className="flex gap-4 pt-2">
            {socials.map((social, i) => {
              const Icon = social.icon;

              return (
                <div
                  key={i}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#5a0a12] transition hover:bg-[#70121b]"
                >
                  <Icon size={16} />
                </div>
              );
            })}
          </div>
        </div>

        {footerLinks.map((section, i) => (
          <div key={i} className="col-span-2 space-y-4">
            <h3 className="text-lg font-semibold">{section.title}</h3>

            <ul className="space-y-3 text-gray-300">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer transition hover:text-white"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-white/10 pt-6 text-center text-gray-300">
        Copyright © 2025 Extricator
      </div>
    </footer>
  );
}
