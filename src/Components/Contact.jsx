const Contact = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#020617]" />

            {/* CARD */}
            <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl px-6 sm:px-10 py-10">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#020617] mb-8">
                    LET’S HAVE A CHAT
                </h2>

                {/* FORM */}
                <form className="space-y-6">

                    {/* NAME */}
                    <input
                        type="text"
                        placeholder="YOUR NAME"
                        className="w-full px-5 py-4 rounded-xl bg-gray-200 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                    />

                    {/* EMAIL */}
                    <input
                        type="email"
                        placeholder="EMAIL ADDRESS"
                        className="w-full px-5 py-4 rounded-xl bg-gray-200 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                    />

                    {/* MESSAGE */}
                    <textarea
                        rows="4"
                        placeholder="CHAT HERE"
                        className="w-full px-5 py-4 rounded-xl bg-gray-200 text-sm outline-none resize-none focus:ring-2 focus:ring-lime-300"
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-yellow-200 text-black font-semibold hover:bg-lime-300 transition"
                    >
                        SUBMIT HERE
                    </button>

                </form>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[500px] h-[500px] bg-lime-300/10 blur-[160px] rounded-full" />
            </div>

        </section>
    );
};

export default Contact;
