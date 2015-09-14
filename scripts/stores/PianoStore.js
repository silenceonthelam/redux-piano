// es6/node polyfills
var assign            = require("object-assign"), // copy objs
    EventEmitter      = require("events").EventEmitter; // event helpers

// flux architecture
var AppDispatcher     = require("../AppDispatcher"),
    PianoConstants    = require("../AppConstants"),
    AudioParamStore   = require("./AudioParamStore");

// generate frequencies
var noteUtils         = require("../utils/note-utils");

var audio = require("../audio/audio");

// the only constant is "change"
//      ~ Wayne Gretzky
//          ~ Michael Scott
const CHANGE_EVENT = "change";

var _currentNote = {},
    _currentNotes = [],
    _currentOctave = 3;

var PianoStore = assign({}, EventEmitter.prototype, {
    getAllKeys: function() {
        return _pianoKeys;
    },
    getAudioParams: function() {
        return AudioParamStore.getAudioParamSettings();
    },
    getCurrentNote: function() {
        return _currentNote;
    },
    getCurrentOctave: function() {
        return _currentOctave;
    },
    getRemainingSpace: function() {
        return _remainingSpace;
    },
    getPianoSettings: function() {
        return _pianoSettings;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case PianoConstants.PIANO_PLAY_NOTE:
            var audioParams = this.getAudioParams();
            var note = action.note;
            note.freq = noteUtils.calcFreq(note, audioParams.temperament);
            // pass in note obj defined elsewhere for "this"???
            audio.playNote(note.freq, note.keyNumber, audioParams);
            _currentNote = note;
            // _currentNotes monopoly
            PianoStore.emitChange();
            break;

        case PianoConstants.PIANO_STOP_NOTE:
            var audioParams = this.getAudioParams();
            audio.stopNote(action.note.freq, action.note.keyNumber, audioParams);
            _currentNote = {};
            PianoStore.emitChange();
            break;

        // play notes with MIDI device
        // case PianoConstants.PIANO_PLAY_MIDI_NOTE:
        //         playMidi(action);
        //         PianoStore.emitChange();
        //         break;

        // case PianoConstants.PIANO_STOP_MIDI_NOTE:
        //         stopMidi(action);
        //         PianoStore.emitChange();
        //         break;

        // play notes with QWERTY keyboard
        // case PianoConstants.PIANO_PLAY_QWERTY_NOTE:
        //         playQWERTY(action);
        //         PianoStore.emitChange();
        //         break;

        // case PianoConstants.PIANO_STOP_QWERTY_NOTE:
        //         stopQWERTY(action);
        //         PianoStore.emitChange();
        //         break;

        default:
            // no op
    }
});

module.exports = PianoStore;