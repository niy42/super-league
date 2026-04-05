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
    <footer className="mx-auto w-full max-w-7xl border-t border-t-zinc-50/50 px-4 pt-12 pb-8 text-white sm:px-8 sm:pt-20 md:px-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-20">
        {/* Logo & Description */}
        <div className="space-y-6 sm:col-span-5">
          <h2 className="text-2xl font-semibold sm:text-4xl">Extricator.</h2>

          <p className="max-w-full text-lg leading-normal font-light text-gray-300 sm:max-w-xs sm:text-2xl">
            Join the Ranks of Visionary Collectors and Own a Piece of History
          </p>

          {/* Social icons */}
          <div className="flex gap-4 pt-2">
            {socials.map((social, i) => {
              const Icon = social.icon;

              return (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#5a0a12] transition hover:bg-[#70121b]"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer link sections */}
        {footerLinks.map((section, i) => (
          <div key={i} className="mt-8 space-y-4 sm:col-span-2 sm:mt-0">
            <h3 className="text-lg font-semibold">{section.title}</h3>

            <ul className="space-y-3 text-gray-300">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer text-sm transition hover:text-white sm:text-base"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-300 sm:mt-16 sm:text-base">
        Copyright © 2025 Extricator
      </div>
    </footer>
  );
}
