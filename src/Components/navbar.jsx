import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 md:px-20 py-6 text-white">

        {/* LEFT – LOGO */}
        <div className="flex items-center flex-col gap-2">
          <div className="rounded-full px-3 py-2 border border-white flex items-center justify-center hover:bg-white/12 transition">
            <h1 className="font-bold text-[28px] md:text-[36px]">⚛</h1>
          </div>
          <p className="hidden sm:block text-sm tracking-widest">
            REACTIVE
          </p>
        </div>

        {/* CENTER – NAV LINKS (DESKTOP ONLY) */}
        <ul className="hidden md:flex items-center gap-10 text-xl font-bold tracking-widest text-gray-300">
          <li className="hover:text-white cursor-pointer">ABOUT ME</li>
          <li className="hover:text-white cursor-pointer">SKILLS</li>
          <li className="hover:text-white cursor-pointer">PROJECTS</li>
        </ul>

        {/* RIGHT – CONTACT BUTTON */}
        <div className="flex items-center gap-3">

          {/* CONTACT BUTTON (DESKTOP) */}
          <button className="hidden md:flex group items-center gap-4 px-6 py-2 rounded-full border border-gray-600 text-sm text-white hover:bg-white/12 transition">
            CONTACT
            <span className="w-9 h-9 rounded-full bg-lime-200 flex items-center justify-center text-black font-bold transition group-hover:rotate-45">
              ↗
            </span>
          </button>

          {/* MOBILE MENU ICON */}
          <button onClick={() => setMenuOpen(true)}
            className="md:hidden w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-xl">
            ☰
          </button>

        </div>
      </nav>
      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-[#0b1220] text-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        {/* MENU ITEMS */}
        <ul className="flex flex-col gap-8 text-lg px-10 mt-10 tracking-widest">
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">ABOUT ME</li>
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">SKILLS</li>
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">PROJECTS</li>
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">CONTACT</li>
        </ul>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
