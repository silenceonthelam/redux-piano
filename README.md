# React Piano

A piano of sorts built using React.js, Flux, webpack, and the web audio api. It is currently being enhanced for my presentation at PGH Tech Fest on June 13th, 2015. http://pghtechfest.com/talks

    "In the past few years, the technology that's been available for the web has grown to the point where it is now possible to create and play instruments directly in a web browser. In this talk, I will demonstrate the basics of new APIs such as Web Audio, Web MIDI, and websockets by creating and demonstrating a modular synthesizer.
     
     There will also be some pretty complex CSS examples given that this instrument and all its modules will be made entirely with HTML, CSS, and Javascript.
     
     The demo will include playing a pre-made version of this real-time multi-user synthesizer with a laptop keyboard and also with a MIDI-capable piano keyboard.
     Audience participation welcome!"

## Current Features

- gain
- detune
- oscs
- temperaments


## Upcoming Features

- qwerty support
- midi support
- spawning 1 or 100 synths
- synth "chat room"
- envelopes
- fm synth techniques
- display module that shows what notes you play


## Usage

### 1. Install deps

```
    npm install
```

### 2. Start webpack-dev-server

```
    npm start
```

### 3. Open http://localhost:3232/


## Build

```
    npm install
```

### 2. Build

```
    webpack --config webpack.dist.config.js
```

### 3. Open the index.html file in your browser

