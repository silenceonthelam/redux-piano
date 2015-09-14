var pitchClassNames = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'],
    octaves = [0,1,2,3,4,5,6,7,8,9,10,11];

var pianoMargin = 88, // borders and margin outside of keys
    whiteKeyWidth = 48,
    blackKeyIndicies = [1,3,6,8,10];

var PianoKeyGenerator = {
    adjustForEndingBlackKey: function(numKeys) {
        // remove last key if black since pianos
        // all end on white keys
        return (blackKeyIndicies.indexOf(numKeys % 12) === -1) ?
                 numKeys-- : numKeys;
    },
    generateKeys: function(numKeys) {
        // var numKeys = numKeys || 24;

        var keys = [],
            k = 0;

        var startOctave = 0,
            startPitchClass = 0;

        // adjust the start octaves if the screen is small
        // b/c who wants a keyboard with just the lowest octave
        // well, maybe people might want that,
        // but that's their problem

        if (numKeys <= 60 && numKeys > 48) {
            startOctave = 0;
        } else if (numKeys <= 48 && numKeys > 36) {
            startOctave = 1;
        } else if (numKeys <= 36 && numKeys > 24) {
            startOctave = 2;
        } else {
            startOctave = 3;
        }

        var offset = 0;

        if (startOctave > 0) {
            offset = startOctave * 12;
        }

        var keyNumber = offset,
            x = 0;

        while (numKeys > 0) {
            var octave = parseInt((x / 12) + startOctave, 10);

            keys.push({
                keyNumber: keyNumber++,
                octave: octaves[octave],
                pitchClass: pitchClassNames[x % 12]
            });

            numKeys--;
            x++;
        }

        return keys;
    },
    getNumKeys: function(windowWidth) {
        var totalKeys = 0;

        var i = 0;

        // piano has max-width of 1600
        if (windowWidth > 1600) {
            windowWidth = 1600;
        }

        var availWidth = windowWidth - pianoMargin;

        while (availWidth >= whiteKeyWidth) {
            // since black keys don't attribute to the overall width
            // due to neg margin, don't subtract anything
            if (blackKeyIndicies.indexOf(i) === -1) {
                availWidth = availWidth - whiteKeyWidth;
            }

            totalKeys++;
            i++;

            if (i === 12) {
                i = 0;
            }
        }
        return totalKeys;
    },
    getRemainingSpace: function(numKeys, windowWidth) {
        // if any space remains after keys are defined,
        // we need to distribute that to make the piano look better

        if (windowWidth > 1600) {
            windowWidth = 1600;
        }

        var availWidth = windowWidth - pianoMargin,
            totalWidth = 0;

        var j = 0;

        for (var i=0; i<numKeys; i++) {
            // the last key is a black one, don't count it

            if (i === numKeys.length - 1 && 
                blackKeyIndicies.indexOf(i) !== -1) {
                break;
            }

            if (blackKeyIndicies.indexOf(j) === -1) {
                totalWidth = totalWidth + whiteKeyWidth;
            }

            j++;

            if (j === 12) {
                j = 0;
            }
        }

        return (availWidth - totalWidth);
    }   
};

module.exports = {
    adjustForEndingBlackKey: PianoKeyGenerator.adjustForEndingBlackKey,
    generateKeys: PianoKeyGenerator.generateKeys,
    getNumKeys: PianoKeyGenerator.getNumKeys,
    getRemainingSpace: PianoKeyGenerator.getRemainingSpace
};