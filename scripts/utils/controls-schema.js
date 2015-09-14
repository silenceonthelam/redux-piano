module.exports = {
    ampEnv: {
        attack: {
            displayName: "A",
            id: "ampEnvAttack",
            max: 1, // 1000
            min: 0,
            step: 0.01, // 10
            val: 0.1 // 1
        },
        decay: {
            displayName: "D",
            id: "ampEnvDecay",
            max: 1,
            min: 0, // 1000
            step: 0.01, // 10
            val: 0.05 // .5
        },
        sustain: {
            displayName: "S",
            id: "ampEnvSustain",
            max: 1, // 100
            min: 0,
            step: 0.01, // 1
            val: 0.04 // .4
        },
        release: {
            displayName: "R",
            id: "ampEnvRelease",
            max: 1, // 4000
            min: 0,
            step: 0.01, // 40
            val: 0 // 0
        }
    },
    filterEnv: {
        attack: {
            displayName: "A",
            id: "filterEnvAttack",
            max: 1, // 1000
            min: 0,
            step: 0.01, // 10
            val: 0.1 // 1
        },
        decay: {
            displayName: "D",
            id: "filterEnvDecay",
            max: 1,
            min: 0, // 1000
            step: 0.01, // 10
            val: 0.05 // .5
        },
        sustain: {
            displayName: "S",
            id: "filterEnvSustain",
            max: 1, // 100
            min: 0,
            step: 0.01, // 1
            val: 0.04 // .4
        },
        release: {
            displayName: "R",
            id: "filterEnvRelease",
            max: 1, // 4000
            min: 0,
            step: 0.01, // 40
            val: 0 // 0
        }
    },
    detune: {
        fineTune: {
            osc1: {
                displayName: "Fine",
                id: "osc1FineTune",
                max: 50,
                min: -50,
                step: 1,
                val: 0
            },
            osc2: {
                displayName: "Fine",
                id: "osc2FineTune",
                max: 50,
                min: -50,
                step: 1,
                val: 0
            }
        },
        semitoneTune: {
            osc1: {
                displayName: "Semitone",
                id: "osc1SemitoneTune",
                max: 12,
                min: -12,
                step: 1,
                val: 0
            },
            osc2: {
                displayName: "Semitone",
                id: "osc2SemitoneTune",
                max: 12,
                min: -12,
                step: 1,
                val: 0
            }
        },
        octaveTune: {
            osc1: {
                displayName: "Octave",
                id: "osc2OctaveTune",
                max: 12,
                min: 0,
                step: 1,
                val: 3
            },
            osc2: {
                displayName: "Octave",
                id: "osc2OctaveTune",
                max: 12,
                min: 0,
                step: 1,
                val: 3
            }                       
        }         
    },
    gain: {
        masterGain: {
            displayName: "Master",
            id: "gain",
            max: 1,
            min: 0,
            step: .1,
            val: .5
        },
        noiseGain: {
            displayName: "Noise",
            id: "gain",
            max: 1,
            min: 0,
            step: .1,
            val: .5
        },
        osc1Gain: {
            displayName: "Osc 1",
            id: "gain",
            max: 1,
            min: 0,
            step: .1,
            val: .5
        },  
        osc2Gain: {
            displayName: "Osc 2",
            id: "gain",
            max: 1,
            min: 0,
            step: .1,
            val: .5
        }
    },
    pan: {
        displayName: "Pan",
        id: "pan",
        max: 1,
        min: 0,
        step: .1,
        val: .5
    },
    drive: {
        displayName: "Drive",
        id: "drive",
        max: 1,
        min: 0,
        step: .1,
        val: .5
    },
    oscs: {
        osc1: {
            sine: {
                displayName: "Sine",
                id: "osc1Sine",
                on: true,
                val: 0
            },
            square: {
                displayName: "Sq",
                id: "osc1Square",
                on: false,
                val: 1
            },
            saw: {
                displayName: "Saw",
                id: "osc1Saw",
                on: false,
                val: 2
            },
            triangle: {
                displayName: "Tri",
                id: "osc1Triangle",
                on: false,
                val: 3
            }
        },
        osc2: {
            sine: {
                displayName: "Sine",
                id: "osc2Sine",
                on: true,
                val: 0
            },
            square: {
                displayName: "Sq",
                id: "osc2Square",
                on: false,
                val: 1
            },
            saw: {
                displayName: "Saw",
                id: "osc2Saw",
                on: false,
                val: 2
            },
            triangle: {
                displayName: "Tri",
                id: "osc2Triangle",
                on: false,
                val: 3
            }
        }
    },
    temperaments: {
        eq: {
            displayName: "Equal",
            id: "equalTemperament",
            on: true,
            val: 0
        },
        py: {
            displayName: "Py",
            id: "pythagoreanTemperament",
            on: false,
            val: 1
        },
        just: {
            displayName: "Just",
            id: "justTemperament",
            on: false,
            val: 2
        },
        mt: {
            displayName: "MT",
            id: "meanToneTemperament",
            on: false,
            val: 3
        }
    },
    compressor: {
        attack: {
            displayName: "Attack",
            id: "compAttack",
            max: 100,
            min: -100,
            step: 1,
            val: 0.003
        },
        knee: {
            displayName: "Knee",
            id: "compKnee",
            max: 100,
            min: -100,
            step: 1,
            val: 30
        },
        ratio: {
            displayName: "Ratio",
            id: "compRatio",
            max: 100,
            min: -100,
            step: 1,
            val: 12
        },
        reduction: {
            displayName: "Reduction",
            id: "compReduction",
            max: 100,
            min: -100,
            step: 1,
            val: 0
        },
        release: {
            displayName: "Release",
            id: "compRelease",
            max: 100,
            min: -100,
            step: 1,
            val: 0.25
        },
        threshold: {
            displayName: "Threshold",
            id: "compThreshold",
            max: 100,
            min: -100,
            step: 1,
            val: -24
        }
    },
    lfo: {
        osc: {
            sine: {
                displayName: "Sine",
                id: "lfoSine",
                on: true,
                val: 0
            },
            square: {
                displayName: "Sq",
                id: "lfoSquare",
                on: false,
                val: 1
            },
            saw: {
                displayName: "Saw",
                id: "lfoSaw",
                on: false,
                val: 2
            },
            triangle: {
                displayName: "Tri",
                id: "lfoTriangle",
                on: false,
                val: 3
            }
        },
        lfoRate: {
            displayName: "Rate",
            id: "lfoRate",
            max: 20,
            min: 0.2,
            step: 1,
            val: 0                     
        },
        lfoDepth: {
            displayName: "Depth",
            id: "lfoDepth",
            max: 20,
            min: 0.2,
            step: 1,
            val: 0
        }
    },
    tremolo: {
        tremoloDepth: {
            displayName: "Depth",
            id: "tremoloDepth",
            max: 1,
            min: 0,
            step: .1,
            val: 0
        },
        tremoloRate: {
            displayName: "Rate",
            id: "tremoloRate",
            max: 1,
            min: 0,
            step: .1,
            val: 0
        },
    },
    filter: {
        filterTypes: {
            lowpass: {
                displayName: "Lowpass",
                id: "lowpassFilter",
                on: false,
                val: 0
            },
            highpass: {
                displayName: "Highpass",
                id: "highpassFilter",
                on: false,
                val: 1
            },
            bandpass: {
                displayName: "Bandpass",
                id: "bandpassFilter",
                on: false,
                val: 2
            }
        },
        filterCutoffFreq: {
            displayName: "Cutoff",
            id: "filterCutoffFreq",
            max: 10000,
            min: 0,
            step: 1,
            val: 0
        },
        filterRes: {
            displayName: "Res",
            id: "filterRes",
            max: 100,
            min: 0,
            step: 1,
            val: 0
        }
    },
    delay: {
        delayAttack: {
            displayName: "Attack",
            id: "delayAttack",
            max: 1,
            min: 0,
            on: false,
            step: .01,
            val: 0                   
        },
        delayDry: {
            displayName: "Dry",
            id: "delayDry",
            max: 1,
            min: 0,
            on: false,
            step: .01,
            val: 0                   
        },
        delayWet: {
            displayName: "Wet",
            id: "delayWet",
            max: 1,
            min: 0,
            on: false,
            step: .01,
            val: 0                   
        },
        delayRelease: {
            displayName: "Release",
            id: "delayRelease",
            max: 1,
            min: 0,
            on: false,
            step: .01,
            val: 0                   
        },
        delayRepeat: {
            displayName: "Repeat",
            id: "delayRepeat",
            max: 1,
            min: 0,
            on: false,
            step: .01,
            val: 0                   
        },
        delayTime: {
            displayName: "Time",
            id: "delayTime",
            max: 1,
            min: 0,
            on: false,
            step: .01,
            val: 0                   
        }                         
    },
    vibrato: {
        vibratoDepth: {
            displayName: "Depth",
            id: "vibratoDepth",
            max: 1,
            min: 0,            
            on: false,
            step: .1,
            val: 0
        },
        vibratoRate: {
            displayName: "Rate",
            id: "vibratoRate",
            max: 1,
            min: 0,
            on: false,
            step: .1,
            val: 0
        }
    },
    noise: {
        whiteNoise: {
            displayName: "White",
            id: "whiteNoise",
            on: false,
            val: "white"
        },
        pinkNoise: {
            displayName: "Pink",
            id: "pinkNoise",
            on: false,
            val: "pink"
        },
        brownNoise: {
            displayName: "Brown",
            id: "brownNoise",
            on: false,
            val: "brown"
        }
    }
};