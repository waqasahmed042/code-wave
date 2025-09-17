import { useState, useEffect } from "react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            <div className="absolute inset-0 h-screen">
                {init && (
                    <Particles
                        id="tsparticles"
                        options={{
                            background: {
                                color: { value: "transparent" },
                            },
                            fullScreen: { enable: false },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: { enable: true, mode: "push" },
                                    onHover: { enable: true, mode: "repulse" },
                                    resize: { enable: true },
                                },
                                modes: {
                                    push: { quantity: 4 },
                                    repulse: { distance: 80, duration: 0.4 },
                                },
                            },
                            particles: {
                                color: { value: "#FFFFFF" },
                                links: {
                                    color: "#FFFFFF",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                move: {
                                    enable: true,
                                    speed: 1,
                                    outModes: { default: "bounce" },
                                },
                                number: { value: 200, density: { enable: true } },
                                opacity: { value: 0.5 },
                                shape: { type: "circle" },
                                size: { value: { min: 1, max: 3 } },
                            },
                            detectRetina: true,
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default ParticleBackground;