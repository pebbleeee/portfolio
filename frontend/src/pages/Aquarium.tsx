import { useState } from "react";

export default function Aquarium() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = () => {
        if (!message.trim()) return;

        setStatus("loading");

        // fake network delay
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <section className="relative h-full flex items-center justify-center px-6 overflow-hidden">
            {/* Tank */}
            <div className="relative w-full max-w-xl bg-gray-800/60 backdrop-blur rounded-2xl p-8 border border-teal-500/20">

                <h1 className="text-3xl font-bold text-center mb-2">
                    Leave a Message in the Tank 🐠
                </h1>

                <p className="text-center text-gray-300 mb-6">
                    Drop a kind note, feedback, or a friendly wave —
                    I’ll send a fish back your way.
                </p>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="
            w-full
            h-32
            resize-none
            rounded-xl
            bg-gray-900/80
            border
            border-gray-700
            p-4
            text-white
            placeholder-gray-400
            focus:outline-none
            focus:border-teal-400
          "
                />

                <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className={`
            mt-4
            w-full
            py-3
            rounded-xl
            font-semibold
            transition-all
            ${status === "loading"
                            ? "bg-teal-500/20 text-teal-300 cursor-not-allowed"
                            : "bg-teal-500/30 text-teal-200 hover:bg-teal-500/40 hover:text-white"
                        }
          `}
                >
                    {status === "loading" ? "Sending through the water..." : "Release into the Aquarium"}
                </button>

                <div className="mt-6 text-center">
                    {status === "idle" && (
                        <p className="text-gray-400 italic">
                            Your fish will appear here...
                        </p>
                    )}

                    {status === "loading" && (
                        <p className="text-teal-300 animate-pulse">
                            Searching the reef for a fish...
                        </p>
                    )}

                    {status === "success" && (
                        <div className="text-teal-200">
                            <p className="font-semibold">You received a Lanternfish 🐟</p>
                            <p className="text-sm text-gray-300 mt-1">
                                A quiet glow in the deep — thanks for leaving a message.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
