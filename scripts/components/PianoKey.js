var PianoActions = require("../actions/PianoActions"),
	React 		 = require("react");

var PianoKey = React.createClass({
	propTypes: {
		keyClass: React.PropTypes.string,
		keyNumber: React.PropTypes.number,
		octave: React.PropTypes.number,
		pitchClass: React.PropTypes.string,
		shouldHighlight: React.PropTypes.bool
	},
	getDefaultProps: function() {
		return {
			keyClass: "",
			keyNumber: 0,
			octave: 0,
			pitchClass: "",
			shouldHighlight: false
		};
	},
	render: function() {
		var classMod = "";

		if (this.props.shouldHighlight) {
			classMod = "--highlight"
		}

		return (
			<span className={"key " + this.props.keyClass + classMod}
				onMouseDown={this.playNote}
				onMouseUp={this.stopNote}>
			</span>
		);
	},
	playNote: function() {
		PianoActions.playNote(this.props);
	},
	stopNote: function(e) {
		PianoActions.stopNote(this.props);
	}
});

module.exports = PianoKey;