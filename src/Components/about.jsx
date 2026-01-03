import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

const AboutMe = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030611] via-[#070a0f] to-[#020617]" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-2xl text-center">

                {/* HEADING */}
                <h2 className="text-4xl sm:text-4xl md:text-7xl font-bold text-yellow-200">
                    WHO AM I ?
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed">
                    I Am a full-stack website developer specialized in ReactJS. Plus,
                    I also know some WordPress front-end development with Elementor and WooCommerce.
                </p>

                <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-xl">
                    Programming is my passion, that’s the reason I am working during my
                    academic career.
                </p>

                <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-xl">
                    Additionally, I enjoy PC games and reading story-based books in my
                    leisure time  relaxing and fun!
                </p>

                {/* BUTTON */}
                <button className="mt-8 px-6 sm:px-8 py-3 rounded-full bg-yellow-200 text-black font-semibold hover:bg-lime-300 transition">
                    SHOW MY PROJECTS
                </button>
            </div>

            {/* FLOATING IMAGES */}
            <img
                src={about1}
                className="hidden lg:block absolute left-50 bottom-24 w-36 xl:w-40 rotate-[-16deg] rounded-xl shadow-xl"
                alt=""
            />

            <img
                src={about2}
                className="hidden lg:block absolute right-50 top-70 w-28 xl:w-32 rotate-[-35deg] rounded-xl shadow-xl"
                alt=""
            />

            <img
                src={about3}
                className="hidden lg:block absolute left-72 top-17 w-30 xl:w-18 rotate-[9deg] rounded-xl shadow-xl"
                alt=""
            />

            {/* GLOW */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[260px] sm:w-[360px] md:w-[420px] h-[260px] sm:h-[360px] md:h-[420px] bg-yellow-300/10 blur-[140px] rounded-full" />
            </div>

        </section>
    );
};

export default AboutMe;
