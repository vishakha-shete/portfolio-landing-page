import {
    SiBootstrap,
    SiAxios,
    SiRedux,
    SiMui,
    SiFirebase,
    SiWordpress,
    SiFramer,
} from "react-icons/si";

const AdditionalSkills = () => {
    return (
        <section className="relative py-20 px-4 overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#020617]" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-5xl mx-auto">

                {/* CARD */}
                <div className="bg-[#0b1220]/80 backdrop-blur border border-gray-700 rounded-2xl px-7 py-16 shadow-xl">

                    {/* HEADING */}
                    <h3 className="text-center text-4xl md:text-4xl font-bold text-yellow-200 mb-10">
                        ADDITIONAL SKILLS
                    </h3>

                    {/* ICON ROW */}
                    <div className="flex flex-wrap items-center justify-center gap-10 text-4xl md:text-5xl">

                        <SiBootstrap className="text-purple-400 hover:scale-110 transition" />
                        <SiAxios className="text-violet-400 hover:scale-110 transition" />
                        <SiRedux className="text-purple-500 hover:scale-110 transition" />
                        <SiMui className="text-sky-400 hover:scale-110 transition" />
                        <SiFirebase className="text-yellow-400 hover:scale-110 transition" />
                        <SiWordpress className="text-white hover:scale-110 transition" />
                        <SiFramer className="text-pink-400 hover:scale-110 transition" />

                    </div>
                </div>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[420px] h-[420px] bg-purple-400/10 blur-[160px] rounded-full" />
            </div>

        </section>
    );
};

export default AdditionalSkills;
