const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-20 py-6 text-white">

      {/* LEFT – LOGO */}
      <div className="flex items-center gap-2">
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
        <button className="md:hidden w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-xl">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
