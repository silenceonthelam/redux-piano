// es6/node polyfills
var assign            = require("object-assign"), // copy objs
    EventEmitter      = require("events").EventEmitter; // event helpers

// flux architecture
var AppDispatcher       = require("../AppDispatcher"),
    AudioParamConstants = require("../AppConstants");

var _audioParamSettings = require("../utils/controls-schema");

// the only constant is "change"
//      ~ Wayne Gretzky
//          ~ Michael Scott
const CHANGE_EVENT = "change";

// make sure this is only init'd once
var audioCtx = audioCtx || new AudioContext();

// audioParam updaters
function updateDetune(detuneVal) {
    _audioParamSettings.detuneAmt = parseFloat(detuneVal, 10);
}

function updateEnvelope(envelopeVals) {
    _audioParamSettings.ampEnv;
}

function updateGain(gainVal) {
    _audioParamSettings.masterGain = parseFloat(gainVal, 10);
}

function updateOscType(oscType) {
    _audioParamSettings.oscType = oscType;
}

// var updaters = [updateDetune, updateGain, updateOscType];

function updateValue(val, id) {
    console.log(val);
    console.log(id);
}

var AudioParamStore = assign({}, EventEmitter.prototype, {
    getAudioParamSettings: function() {
        return _audioParamSettings;
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
        case AudioParamConstants.AUDIO_PARAM_UPDATE_VALUE:
            updateValue(action);
            AudioParamStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = AudioParamStore;