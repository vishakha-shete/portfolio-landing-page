import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs } from "react-icons/si";

const skills = [
    { icon: <FaHtml5 className="text-5xl text-[rgb(245,121,63)]" />, label: "HTML" },
    { icon: <FaCss3Alt className=" text-5xl text-[rgb(81,133,230)]" />, label: "CSS" },
    { icon: <FaJs className="text-5xl text-[rgb(210,250,65)]" />, label: "JavaScript" },
    { icon: <FaReact className="text-5xl text-[rgb(69,197,214)]" />, label: "React" },
    { icon: <FaNodeJs className="text-5xl text-[rgb(70,212,101)]" />, label: "Node.js" },
    { icon: <SiTailwindcss className="text-5xl text-[rgb(69,197,214)]" />, label: "Tailwind" },
    { icon: <SiMongodb className="text-5xl text-[rgb(98,230,71)]" />, label: "MongoDB" },
];

const Skills = () => {
    return (
        <section className=" relative py-14 px-5 sm:px-10 overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#020617]" />

            {/* CONTENT */}
            <div className="relative z-16 max-w-5xl  mx-auto">

                {/* HEADING */}
                <h2 className="text-center text-4xl md:text-6xl font-bold text-yellow-200 mb-16">
                    MY SKILLS
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                    {/* FIRST 4 SKILLS */}
                    {skills.slice(0, 4).map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#0b1220] border border-gray-700  rounded-xl flex flex-col items-center justify-center h-32 hover:scale-105 transition shadow-lg"
                        >
                            <div className="text-4xl text-white mb-2">
                                {skill.icon}
                            </div>
                            <p className="text-sm text-gray-400">
                                {skill.label}
                            </p>
                        </div>
                    ))}

                    {/* DOWNLOAD CV CARD (2x HEIGHT) */}
                    <div className="
                     bg-[#0b1220]
                      border border-gray-700
                      rounded-xl
                      flex flex-col items-center justify-center
                      h-full
                      row-span-2
                      text-center
                      hover:scale-105
                      transition
                      shadow-lg
                      ">
                        <h3 className="text-4xl font-bold text-white">4+</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Years Experience
                        </p>
                        <button className="mt-4 px-4 py-2 rounded-full bg-yellow-200 text-black text-sm font-semibold hover:bg-lime-300 transition">
                            DOWNLOAD CV
                        </button>
                    </div>


                    {/* REMAINING SKILLS */}
                    {skills.slice(4).map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#0b1220] border border-gray-700 rounded-xl flex flex-col items-center justify-center h-32 hover:scale-105 transition shadow-lg"
                        >
                            <div className="text-4xl text-white mb-2">
                                {skill.icon}
                            </div>
                            <p className="text-sm text-gray-400">
                                {skill.label}
                            </p>
                        </div>
                    ))}

                    {/* NEXT.JS CARD (MOVED TO LAST) */}
                    <div className="bg-[#0b1220] border border-gray-700 rounded-xl flex flex-col items-center justify-center h-32 hover:scale-105 transition shadow-lg">
                        <div className="text-4xl text-white mb-2">
                            <SiNextdotjs />
                        </div>
                        <p className="text-sm text-gray-400">
                            Next.js
                        </p>
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

export default Skills;
