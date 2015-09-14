// make sure this is only init'd once
var audioCtx = audioCtx || new AudioContext();

// vibrato -> osc.detune
// lfo -> vibrato ->
    // vib: gain
    // lfo: osc
    // osc: osc

function triggerVibrato(ctx, env, osc, lfo, masterGain) {
    // env.connect(masterGain);

    // masterGain.gain.value = .1;
    // masterGain.connect(ctx.destination);

    // env.gain.value = 0;

    // env.gain.setTargetAtTime(0, ctx.currentTime, .1);
    
    // osc.connect(env);

    // osc.type = "sawtooth";
    // osc.frequency.value = 440;

    // lfo.frequency.value = 2;

    // lfo.connect(env.gain);
    // lfo.start(ctx.currentTime);

    // osc.start(ctx.currentTime);

    // lfo = context.createOscillator();
    // lfo.frequency.value = LFOSPEED;
    // lfo.type = "triangle";
    // lfoDepth = context.createGain();
    // lfoDepth.gain.value = LFODEPTH;
    // lfo.connect(lfoDepth);
    // lfo.start(0);

    // lfo = ctx.createOscillator();
    // lfo.frequency.value = 5;
    // lfo.connect(vibrato);
    // lfo.start(startTime);

    // lfoDepth.connect(filter.detune);
    // lfoDepth.connect(filter2.detune);

    // multiplying the equation by a low frequency (6 Hz).
    // "attack time" effect (start time where the sound increases its amplitude) is 
    // created by multiplying the equation by (1-exp(-t*3)).    
}

function releaseVibrato(ctx, env, osc, lfo, masterGain) {
    env.gain.setTargetAtTime(0, ctx.currentTime, .2);

    osc.stop(ctx.currentTime);
    lfo.stop(ctx.currentTime);
}

function triggerTremolo(ctx, env, shaper, osc, lfo, masterGain) {
    env.connect(masterGain);

    masterGain.gain.value = .1;
    masterGain.connect(ctx.destination);

    env.gain.value = 0;

    shaper.curve = new Float32Array([0,-5,1]);
    shaper.connect(env.gain);

    lfo.frequency.value = 3;
    lfo.type = "sine";

    lfo.start(ctx.currentTime);
    lfo.connect(shaper);

    osc.connect(env);

    osc.type = "triangle";
    osc.frequency.value = 440;

    osc.start(ctx.currentTime);
}

function releaseTremolo(ctx, env, shaper, osc, lfo, masterGain) {
    env.gain.setTargetAtTime(0, ctx.currentTime, .2);

    osc.stop(ctx.currentTime);
    lfo.stop(ctx.currentTime);
}

function triggerStereoTremolo(ctx, env, shaper, osc, lfo, masterGain, panner) {
    panner.connect(masterGain);

    masterGain.gain.value = .1;
    masterGain.connect(ctx.destination);

    lfo.frequency.value = 2;
    lfo.type = "sine";
    lfo.connect(panner.pan);
    lfo.start(ctx.currentTime);

    osc.connect(panner);
    osc.type = "triangle";
    osc.frequency.value = 440;
    osc.start(ctx.currentTime);
}

function releaseStereoTremolo(ctx, env, shaper, osc, lfo, masterGain, panner) {
    env.gain.setTargetAtTime(0, ctx.currentTime, .2);

    osc.stop(ctx.currentTime);
    lfo.stop(ctx.currentTime);
}

function triggerFilter(ctx, osc, masterGain, filter) {
    filter.connect(masterGain);

    masterGain.gain.value = .1;
    masterGain.connect(ctx.destination);

    filter.type = "highpass";
    filter.frequency.value = 15000;

    filter.frequency.setValueAtTime(15000, ctx.currentTime);

    osc.connect(filter);
    osc.type = "sawtooth";
    osc.frequency.value = 440;
    osc.start(ctx.currentTime);
}

function releaseFilter(ctx, osc, masterGain, filter) {
    filter.frequency.linearRampToValueAtTime(500, ctx.currentTime + 2);
    osc.stop(ctx.currentTime + 3);
}

// tremolo
    // Add a global effect so that the audio output has a 'sine' 
    // shaped amplitude tremolo at a rate of 3 Hz.

    // The simple way of creating a tremolo effect is 
    // using a GainNode with it's gain AudioParam modulated 
    // by a low frequency OscillatorNode.

    // var tremolo = audioContext.createGain();
    // tremolo.connect(audioContext.destination);
    // tremolo.gain.value = 0; // set base value

    // var lfo = audioContext.createOscillator();
    // lfo.type = 'sine';
    // lfo.frequency.value = 2;
    // lfo.connect(tremolo.gain);
    // lfo.start(audioContext.currentTime);

    // Now we just have to connect our source nodes to the tremolo GainNode:

    // oscillator.connect(tremolo);

    // If you specified 2 Hz, what you are actually hearing is 4 Hz. 
    // This is because the OscillatorNode output value is sweeping 
    // between -1 and +1. The tremolo GainNode is being set to -1 half 
    // the time, which is not what we want. This doesn't mute the sound, 
    // it actually inverts the phase.

    // This is where the WaveShaperNode can help us. Create an instance using 
    // audioContext.createWaveShaper() and connect your oscillator 
    // to it. Then connect the WaveShaperNode to the target AudioParam.

    // var shaper = audioContext.createWaveShaper();
    // shaper.connect(tremolo.gain);
    // lfo.connect(shaper);

    //  We need to set the curve property. It accepts an instance of 
    // Float32Array to map values from -1 to +1 to any arbitrary 
    // range. It will interpolate between all values you specify.

    // shaper.curve = new Float32Array([0, 8, 10]);

    // But for our purposes we just want to go from 0 to 1 
    // instead of the default -1 to +1:

    // shaper.curve = new Float32Array([0, 1]);

// filter
    // Modify the code on the right so that each note has a highpass 
    // filter that sweeps from 10000 Hz to 500 Hz over the duration 
    // of the sound (linear).
    // You can listen to how the audio is supposed to sound by clicking Play Answer.

    // Modulating Audio Parameters
    // An AudioParam can be set to a specific value as we did in the previous 
    // lesson, but it can also be set to change over time.

    // Here we will ramp the filter frequency from 200 Hz to 6000 Hz over 2 seconds:

    // // preset value to avoid popping on start
    // filter.frequency.value = 200

    // // schedule the start time
    // filter.frequency.setValueAtTime(200, audioContext.currentTime)

    // // ramp the value, and set end time!
    // filter.frequency.linearRampToValueAtTime(6000, audioContext.currentTime + 2)
    // setValueAtTime(value, time)
    // Schedules an instant change to the value of the AudioParam at a precise 
    // time, as measured against AudioContext.currentTime.

    // linearRampToValueAtTime(value, endTime)
    // Schedules a gradual linear change in the value of the AudioParam. The 
    // change starts at the time specified for the previous event, follows a 
    // linear ramp to the new value given in the value parameter, and reaches 
    // the new value at the time given in the endTime parameter.

    // exponentialRampToValueAtTime(value, endTime)
    // Schedules a gradual exponential change in the value of the AudioParam. 
    // The change starts at the time specified for the previous event, follows an 
    // exponential ramp to the new value given in the valueparameter, and reaches 
    // the new value at the time given in the endTime parameter.

var currentNotes = [],
    currentGainNodes = [];

// var _audioParamSettings = {
//     detuneAmt: 0,
//     masterGain: 0.05,
//     oscType: "sine"
// };
// var _ampEnv = {
//     a: 0,
//     d: .5,
//     s: .3,
//     r: .1
// };
// var _pianoSettings = {
//     temperament: "equal"
// };

function playNote(freq, keyNumber, audioParams) {
    // var osc = audioCtx.createOscillator(),
    //     gainNode = audioCtx.createGain();

    // osc.frequency.value = freq;
    // osc.detune.value = _pianoSettings.detuneAmt;

    // osc.type = _pianoSettings.oscType;

    // default the gain to 0 so envelopes will work
    // gainNode.gain.value = 0;

    // osc.connect(gainNode);
    // gainNode.connect(audioCtx.destination);

    // osc.start(0);

    // var now = audioCtx.currentTime;
    // // var param = this.envelope.gain;

    // gainNode.gain.cancelScheduledValues(now); // 0

    // gainNode.gain.setValueAtTime(0, now);

    // gainNode.gain.linearRampToValueAtTime(_pianoSettings.masterGain, now + .001);
    // gainNode.gain.linearRampToValueAtTime(_pianoSettings.masterGain, now + .001);

    // currentNotes.push(osc);
    // currentGainNodes.push(gainNode);

    // this.masterGain = audioContext.createGain();
    // this.env = audioContext.createGain();
    // this.osc = audioContext.createOscillator();
    // this.lfo = audioContext.createOscillator();

    // triggerVibrato(audioContext, this.env, this.osc, this.lfo, this.masterGain);

    // this.shaper = audioContext.createWaveShaper();

    // triggerTremolo(audioContext, this.env, this.shaper, this.osc, this.lfo, this.masterGain);

    // this.panner = audioContext.createStereoPanner();

    // triggerStereoTremolo(audioContext, this.env, this.shaper, 
    //                       this.osc, this.lfo, this.masterGain, this.panner);

    // this.filter = audioContext.createBiquadFilter();
    // triggerFilter(audioContext, this.osc, this.masterGain, this.filter);        
}

function playMidi(action) {
    console.log("playMidi", action);
    playNote();
}

function playQWERTY(action) {
    // should normalize octave???
    console.log("playQWERTY", action);

    var currentOctave = 2;
    var octave = currentOctave + action.octave;

    // currentOctave
   var note = {
        keyNumber: keyNum * octave,
        octave: octave
    };

    playNote(action);
}

function stopNote(freq, keyNumber, audioParams) {
    // releaseVibrato(audioContext, this.env, this.osc, this.lfo, this.masterGain);
    // releaseTremolo(audioContext, this.env, this.shaper, this.osc, this.lfo, this.masterGain);
    // releaseStereoTremolo(audioContext, this.env, this.shaper,
    //                       this.osc, this.lfo, this.masterGain, this.panner);
    // releaseFilter(audioContext, this.osc, this.masterGain, this.filter);

    // var currentNote = currentNotes.pop();
    // var currentGainNode = currentGainNodes.pop();

    // var now = audioCtx.currentTime;
    // currentGainNode.gain.cancelScheduledValues(now);
    // currentGainNode.gain.setTargetAtTime(0.0, now + .25, .15);
}

function stopQWERTY(action) {
    console.log("stopQWERTY", action);
    stopNote();
}

function stopMidi(action) {
    console.log("stopMidi", action);
    stopNote();
}

module.exports = {
    playNote: playNote,
    playMidi: playMidi,
    playQWERTY: playQWERTY,
    stopNote: stopNote,
    stopMidi: stopMidi,
    stopQWERTY: stopQWERTY   
};