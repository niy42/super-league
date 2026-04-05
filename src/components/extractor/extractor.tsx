import { useState } from "react";
import { Menu, X } from "lucide-react";
import NFTCards from "../../assets/svg/nft-cards.svg?react";

export default function ExtricatorHero() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = ["Home", "Gallery", "Roadmap"];
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setToggleMenu(false);
      setClosing(false);
    }, 400);
  };

  return (
    <>
      <nav className="relative mx-auto flex w-full max-w-7xl items-start justify-between gap-4 px-4 py-4 sm:flex-row sm:items-center sm:gap-0 sm:px-12 sm:py-6">
        <h1 className="text-xl font-semibold text-white">Extricator.</h1>
        <div className="hidden gap-10 text-gray-300 sm:flex">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-white sm:text-base"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="relative flex sm:hidden">
          {toggleMenu ? (
            <X
              size={28}
              className="cursor-pointer text-white"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <Menu
              size={28}
              className="cursor-pointer text-white"
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <ul
              className={`mobile-menu white-glassmorphism fixed top-0 right-0 z-20 flex h-screen w-[70vw] list-none flex-col items-end justify-start rounded-l-md p-9 text-white shadow-2xl ${closing ? "slide-out" : ""}`}
            >
              <li className="mt-1 mb-9 w-full text-xl">
                <X size={28} className="cursor-pointer" onClick={handleClose} />
              </li>
              {menuItems.map((item, index) => (
                <li
                  key={item + index}
                  className="my-4 w-full cursor-pointer text-left text-lg hover:text-purple-500"
                  onClick={handleClose}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      <section className="relative mt-16 flex flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center sm:mt-20 sm:gap-8">
        <div className="absolute inset-0 z-1 bg-linear-to-b from-superleague via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-80 w-80 bg-[radial-gradient(circle,rgba(236,72,153,0.25)_0%,rgba(236,72,153,0.1)_40%,transparent_70%)] blur-3xl sm:h-125 sm:w-225" />
        </div>

        <div className="relative z-10 w-full">
          <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[linear-gradient(#ffffff0f_3px,transparent_4px),linear-gradient(90deg,#ffffff0f_3px,transparent_4px)] mask-[radial-gradient(ellipse_50%_70%_at_50%_52%,#000_40%,transparent_70%)] bg-size-[40px_40px]" />
          <div className="absolute top-20 left-1/2 h-56 w-md -translate-x-1/2 bg-[radial-gradient(circle,rgba(236,72,153,0.35)_0%,rgba(236,72,153,0.15)_40%,transparent_70%)] opacity-80 blur-3xl sm:top-24 sm:h-87.5 sm:w-175" />
          <h1 className="relative mx-auto max-w-xl text-3xl leading-snug font-semibold text-white sm:max-w-4xl sm:text-5xl sm:leading-tight md:text-6xl">
            Get Ready to Own
            <br />a Piece of History
          </h1>

          <p className="relative mx-auto mt-2 max-w-md text-lg leading-normal font-light text-gray-400 sm:max-w-2xl sm:text-3xl">
            Join the Ranks of Visionary Collectors and Own a{" "}
            <br className="hidden sm:block" />
            Piece of History
          </p>

          <div className="relative mt-6 flex w-full flex-col justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
            <button className="w-full cursor-pointer rounded-md bg-purple-600 px-10 py-3 hover:bg-purple-700 sm:w-auto sm:px-14 sm:py-3">
              Explore
            </button>

            <button className="w-full cursor-pointer rounded-md bg-white/10 px-10 py-3 hover:bg-white/20 sm:w-auto sm:px-14 sm:py-3">
              Go to market
            </button>
          </div>
        </div>

        <NFTCards className="relative z-10 h-auto w-full max-w-sm max-sm:mt-4 sm:max-w-7xl" />
      </section>
    </>
  );
}
