import { useState, useEffect } from "react";

export default function GlobalBubbles() {
    const [bubbles, setBubbles] = useState<Array<{ id: number; left: number; size: number; delay: number; duration: number }>>([]);

    useEffect(() => {
        const newBubbles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: 5 + Math.random() * 15,
            delay: Math.random() * -20,
            duration: 10 + Math.random() * 10,
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="bubble"
                    style={{
                        left: `${bubble.left}%`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        animationDelay: `${bubble.delay}s`,
                        animationDuration: `${bubble.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}
