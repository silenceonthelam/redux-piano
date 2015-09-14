var React    = require("react"),
	PianoKey = require("./PianoKey");

var PianoKeyboard = React.createClass({
	propTypes: {
		keys: React.PropTypes.array,
		remainingSpace: React.PropTypes.number
	},
	getDefaultProps: function() {
		return {
			keys: [],
			remainingSpace: 0
		};
	},
	shouldComponentUpdate: function(nextProps) {
		// TODO: allow for keypresses
		return this.props.keys.length !== nextProps.keys.length;
	},
	render: function() {
		var extraBorder = { // remaingSpace + orig border
			"borderLeftWidth": this.props.remainingSpace + 3 + "px", 
			"borderRightWidth": this.props.remainingSpace + 3 + "px"
		};

		return (
			<div className="piano__keys" style={extraBorder}>
				{this.renderPianoKeys(this.props.keys)}
			</div>
		);
	},
	renderPianoKeys: function(pianoKeys) {
		//todo: highlighted keys
		//todo: convert note name to pitch class
		return pianoKeys.map(function(key) {
			var isBlack = (key.pitchClass.split("").indexOf('#') !== -1 ||
							(key.pitchClass.split("").indexOf('b') !== -1) 
							? "black" : "") ? "black" : "",
				keyClass = isBlack;

			// currentNote/currentNotes

			var shouldHighlight = false;

			// note: "key" is the "key" in the React sense, not a piano key
			return (
				<PianoKey
					key={"key-" + key.keyNumber} 
					keyClass={keyClass}
					keyNumber={key.keyNumber}
					octave={key.octave}
					pitchClass={key.pitchClass}
					shouldHighlight={shouldHighlight} />
			);
		});
	}
});

module.exports = PianoKeyboard;