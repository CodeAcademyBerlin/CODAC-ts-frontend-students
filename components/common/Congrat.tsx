
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
const Congrats = () => {
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        // await loadConfig(config)
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                    // "background": {
                    //     "color": {
                    //         "value": "#000000"
                    //     }
                    // },
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 999
                    },
                    "particles": {
                        "color": {
                            "value": [
                                "#1E00FF",
                                "#FF0061",
                                "#E1FF00",
                                "#00FF9E"
                            ],
                            "animation": {
                                "enable": true,
                                "speed": 30
                            }
                        },
                        "move": {
                            "decay": 0.1,
                            "direction": "top",
                            "enable": true,
                            "gravity": {
                                "acceleration": 9.81,
                                "enable": true,
                                "maxSpeed": 200
                            },
                            "outModes": {
                                "top": "none",
                                "default": "destroy"
                            },
                            "speed": {
                                "min": 50,
                                "max": 150
                            }
                        },
                        "number": {
                            "value": 0,
                            "limit": 300
                        },
                        "opacity": {
                            "value": 1,
                            "animation": {
                                "enable": false,
                                "startValue": "max",
                                "destroy": "min",
                                "speed": 0.3,
                                "sync": true
                            }
                        },
                        "rotate": {
                            "value": {
                                "min": 0,
                                "max": 360
                            },
                            "direction": "random",
                            "move": true,
                            "animation": {
                                "enable": true,
                                "speed": 60
                            }
                        },
                        "tilt": {
                            "direction": "random",
                            "enable": true,
                            "move": true,
                            "value": {
                                "min": 0,
                                "max": 360
                            },
                            "animation": {
                                "enable": true,
                                "speed": 60
                            }
                        },
                        "shape": {
                            "type": [
                                "circle",
                                "square",
                                "polygon"
                            ],
                            "options": {
                                "polygon": [
                                    {
                                        "sides": 5
                                    },
                                    {
                                        "sides": 6
                                    }
                                ]
                            }
                        },
                        "size": {
                            "value": 3
                        },
                        "roll": {
                            "darken": {
                                "enable": true,
                                "value": 30
                            },
                            "enlighten": {
                                "enable": true,
                                "value": 30
                            },
                            "enable": true,
                            "speed": {
                                "min": 15,
                                "max": 25
                            }
                        },
                        "wobble": {
                            "distance": 30,
                            "enable": true,
                            "move": true,
                            "speed": {
                                "min": -15,
                                "max": 15
                            }
                        }
                    },
                    "emitters": {
                        "position": {
                            "x": 50,
                            "y": 100
                        },
                        "size": {
                            "width": 0,
                            "height": 0
                        },
                        "rate": {
                            "quantity": 10,
                            "delay": 0.1
                        }
                    }
                }
            }
        />
    );
};
export default Congrats