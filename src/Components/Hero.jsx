import newImg from "../assets/new.jpg";

const Hero = () => {
    return (
        <section className=" relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#020617]" />

            {/* CONTENT */}
            <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl">

                {/* TITLE */}
                <h1 className="text-3xl md:text-6xl font-semibold">
                    I'm <span className="text-amber-200">Ferdous Falguni sen</span>
                </h1>

                {/* ROLE */}
                <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2 ">
                    <span className="px-5 py-2 font-bold rounded-xl border border-gray-500 text-xl md:text-5xl bg-white/5 hover:bg-white/0 backdrop-blur">
                        Full Stack
                    </span>
                    <span className="text-3xl md:text-6xl font-light">
                        Developer
                    </span>
                </div>

                {/* IMAGE */}
                <div className="relative mt-10 flex justify-center">

                    {/* GLOW */}
                    <div className="absolute inset-0 flex justify-center">
                        <div className="w-[220px] md:w-[320px] h-[220px] md:h-[320px] bg-lime-400/20 blur-[90px] rounded-full" />
                    </div>

                    {/* IMAGE */}
                    <img
                        src={newImg}
                        alt="profile"
                        className="
                        relative
                        w-[200px] md:w-[300px]
                        rounded-2xl
                        shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                        ring-1 ring-white/10
                        hover:scale-[1.02]
                        transition
                        "
                    />

                    {/* LEFT CARD */}
                    <div className="hidden lg:block absolute -left-72 top-32 bg-[#0b1220] rotate-[-12deg] border border-gray-600 rounded-xl p-4 text-left w-72">
                        <p className="text-sm text-gray-400">Client Review From Australia</p>
                        <p className="text-lime-300 mt-1">★★★★★ 5.0</p>
                        <p className="text-xs text-gray-400 mt-2">
                            Outstanding Web Developer. Highly recommended.
                        </p>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="hidden lg:block absolute -right-72 top-32 bg-[#0b1220] rotate-[12deg] border border-gray-600 rounded-xl p-4 text-left w-72">
                        <p className="font-semibold mb-3">My Expertise</p>

                        {[
                            { label: "Backend", value: "88%" },
                            { label: "CMS", value: "90%" },
                            { label: "Frontend", value: "93%" },
                        ].map((item, i) => (
                            <div key={i} className="mb-3">
                                <div className="flex justify-between text-xs">
                                    <span>{item.label}</span>
                                    <span>{item.value}</span>
                                </div>
                                <div className="w-full h-1 bg-gray-700 rounded mt-1">
                                    <div
                                        className="h-1 bg-yellow-200 rounded"
                                        style={{ width: item.value }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* CTA */}
                <button className="mt-8 px-6 py-2 rounded-full bg-yellow-200 text-black font-semibold hover:bg-lime-200 transition">
                    MY PROJECTS
                </button>

            </div>
        </section>
    );
};

export default Hero;
