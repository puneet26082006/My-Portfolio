document.addEventListener("DOMContentLoaded", () => {
    let darkmode = localStorage.getItem("darkmode");
    const theme_switch = document.getElementById("theme-switch");

    const loadParticlesForTheme = (isDarkMode) => {
        tsParticles.load("tsparticles", {
            background: {
                color: isDarkMode ? "#000000" : "#fffdf5"
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.6
                        }
                    }
                }
            },
            particles: {
                color: {
                    value: isDarkMode ? "#ffffff" : "#333333"
                },
                links: {
                    color: isDarkMode ? "#ffffff" : "#222222",
                    distance: 130,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: "none",
                    random: false,
                    straight: false,
                    outMode: "bounce",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                },
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                opacity: {
                    value: 0.8,
                    random: false
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: 3.5,
                    random: true
                }
            },
            detectRetina: true
        });
    };

    const enableDarkMode = () => {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkmode", "active");
        loadParticlesForTheme(true);
    };

    const disableDarkMode = () => {
        document.body.classList.remove("darkmode");
        localStorage.setItem("darkmode", "inactive");
        loadParticlesForTheme(false);
    };

    if (darkmode === "active") enableDarkMode();
    else disableDarkMode();

    theme_switch.addEventListener("click", () => {
        darkmode = localStorage.getItem("darkmode");
        darkmode !== "active" ? enableDarkMode() : disableDarkMode();
    });
});
