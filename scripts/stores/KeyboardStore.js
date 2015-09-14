// es6/node polyfills
var assign            = require("object-assign"), // copy objs
    EventEmitter      = require("events").EventEmitter; // event helpers

// flux architecture
var AppDispatcher     = require("../AppDispatcher"),
    KeyboardConstants = require("../AppConstants");

// generate keys based on available space
var PianoKeyGenerator = require("../utils/piano-key-generator");

// the only constant is "change"
//      ~ Wayne Gretzky
//          ~ Michael Scott
const CHANGE_EVENT = "change";

var _remainingSpace,
    _pianoKeys;

function generatePianoKeys(windowWidth) {
    var numKeys = PianoKeyGenerator.getNumKeys(windowWidth);

    var adjustedNumKeys = PianoKeyGenerator
                            .adjustForEndingBlackKey(numKeys);

    _remainingSpace = PianoKeyGenerator
                        .getRemainingSpace(adjustedNumKeys, windowWidth);

    _pianoKeys = PianoKeyGenerator.generateKeys(numKeys);
}

var windowWidth = window.innerWidth;
generatePianoKeys(windowWidth);

var KeyboardStore = assign({}, EventEmitter.prototype, {
    getAllKeys: function() {
        return _pianoKeys;
    },
    getRemainingSpace: function() {
        return _remainingSpace;
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
        case KeyboardConstants.KEYBOARD_RECALC_NUM_KEYS:
            generatePianoKeys(window.innerWidth);
            KeyboardStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = KeyboardStore;