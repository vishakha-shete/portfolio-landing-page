import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const Projects = () => {
    return (
        <section className="relative py-15 px-4 sm:px-8 overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute  inset-0 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#020617]" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">

                {/* LEFT TEXT */}
                <div className="text-white max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                        THE WORKS <br /> CLOSEST TO <br /> MY HEART
                    </h2>

                    <button className="mt-10 px-10 py-4 rounded-full bg-yellow-200 text-black font-semibold hover:bg-lime-300 transition">
                        SHOW MY PROJECTS
                    </button>
                </div>

                {/* RIGHT PROJECT CARDS */}
                <div className="flex items-end gap-6">

                    {/* MAIN CARD */}
                    <div className="relative w-[220px] sm:w-[260px] h-[340px] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={project1}
                            alt="Project 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur px-4 py-3 text-white text-sm">
                            IT Industry
                        </div>
                    </div>

                    {/* SMALL CARD 1 */}
                    <div className="w-[90px] sm:w-[110px] h-[300px] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={project2}
                            alt="Project 2"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* SMALL CARD 2 */}
                    <div className="w-[90px] sm:w-[110px] h-[300px] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={project3}
                            alt="Project 3"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[500px] h-[500px] bg-yellow-300/10 blur-[160px] rounded-full" />
            </div>

        </section>
    );
};

export default Projects;
