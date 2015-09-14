var React = require("react");

var DisplayControl = React.createClass({
	propTypes: {
		noteFreq: React.PropTypes.number,
		noteName: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			noteFreq: "485", // "\u2013",
			noteName: "b"// "\u2014"
		};
	},
	render: function() {
		// TODO: multiple notes
		// Visualizer
		return (
			<div className="controls__group--display">
				<div className="controls__display">
					<span className="display__note-name">
						{this.props.noteName}
					</span>
					<span className="display__note-freq">
						{parseInt(this.props.noteFreq, 10) || this.props.noteFreq}
					</span>
				</div>
			</div>
		);
	}
});

module.exports = DisplayControl;