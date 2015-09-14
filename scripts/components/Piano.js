var AudioParamStore = require("../stores/AudioParamStore"),
	KeyboardActions = require("../actions/KeyboardActions"),
	KeyboardStore   = require("../stores/KeyboardStore"),
	PianoControls   = require("./PianoControls"),
	PianoKeyboard   = require("./PianoKeyboard"),
	PianoStore 	    = require("../stores/PianoStore"),
	React 	   	    = require("react");

function getPianoState() {
	return {
		audioParamSettings: AudioParamStore.getAudioParamSettings(),
		currentNote: PianoStore.getCurrentNote(),
		keys: KeyboardStore.getAllKeys(),
		remainingSpace: KeyboardStore.getRemainingSpace()
	};
}

var Piano = React.createClass({
	getInitialState: function() {
		return getPianoState();
	},
	render: function() {
		return (
			<div className="piano">
				<div className="piano__side--left"></div>
				<div className="piano__wrapper">
					<PianoControls
						audioParams={this.state.audioParamSettings}
						currentOctave={this.state.currentNote.octave}
						freq={this.state.currentNote.freq}
						pitchClass={this.state.currentNote.pitchClass} />
					<div className="piano__shelf">
					</div>
					<PianoKeyboard
						keys={this.state.keys}
						remainingSpace={this.state.remainingSpace} />
				</div>
				<div className="piano__side--right"></div>
			</div>
		);
	},
	componentDidMount: function() {
		AudioParamStore.addChangeListener(this._onChange);
		KeyboardStore.addChangeListener(this._onChange);
		PianoStore.addChangeListener(this._onChange);

		window.addEventListener("resize", function() {
			KeyboardActions.recalcNumKeys();
		});
	},
	componentWillUnmount: function() {
		window.removeEventListener("resize");
		AudioParamStore.removeChangeListener(this._onChange);
		KeyboardStore.removeChangeListener(this._onChange);
		PianoStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getPianoState());
	}
});

module.exports = Piano;