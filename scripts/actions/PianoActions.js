var AppDispatcher  = require('../AppDispatcher'),
	PianoConstants = require('../AppConstants');

var PianoActions = {
	playNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_PLAY_NOTE,
			note: note
		});
	},
	stopNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_STOP_NOTE,
			note: note
		});
	},
	playMidiNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_PLAY_MIDI_NOTE,
			note: note
		});
	},
	stopMidiNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_STOP_MIDI_NOTE,
			note: note
		});		
	},
	playQWERTYNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_PLAY_QWERTY_NOTE,
			note: note
		});
	},
	stopQWERTYNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_PLAY_QWERTY_NOTE,
			note: note
		});
	}
};

module.exports = PianoActions;