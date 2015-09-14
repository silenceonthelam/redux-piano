"use strict";

var React  = require("react"),
	Slider = require("./common/Slider");

var GainControls = React.createClass({
	render: function() {
		return (
			<div className="controls__group--stacked">
				<h3 className="param__title">Mix</h3>
				<Slider
					displayName={this.props.masterGain.displayName}
					id={this.props.masterGain.id}
					max={this.props.masterGain.max}
					min={this.props.masterGain.min}
					step={this.props.masterGain.step}
					val={this.props.masterGain.val} />

				<div className="small-sliders">
					<Slider
						classMod="--small"
						displayName={this.props.osc1Gain.displayName}
						id={this.props.osc1Gain.id}
						max={this.props.osc1Gain.max}
						min={this.props.osc1Gain.min}
						step={this.props.osc1Gain.step}
						val={this.props.osc1Gain.val} />
					<Slider
						classMod="--small"
						displayName={this.props.osc2Gain.displayName}
						id={this.props.osc2Gain.id}
						max={this.props.osc2Gain.max}
						min={this.props.osc2Gain.min}
						step={this.props.osc2Gain.step}
						val={this.props.osc2Gain.val} />
					<Slider
						classMod="--small"
						displayName={this.props.noiseGain.displayName}
						id={this.props.noiseGain.id}
						max={this.props.noiseGain.max}
						min={this.props.noiseGain.min}
						step={this.props.noiseGain.step}
						val={this.props.noiseGain.val} />							
				</div>

				<Slider
					displayName={this.props.drive.displayName}
					id={this.props.drive.id}
					max={this.props.drive.max}
					min={this.props.drive.min}
					step={this.props.drive.step}
					val={this.props.drive.val} />
				<Slider
					displayName={this.props.pan.displayName}
					id={this.props.pan.id}
					max={this.props.pan.max}
					min={this.props.pan.min}
					step={this.props.pan.step}
					val={this.props.pan.val} />

				<div classname="tremolo">
					<h3 className="param__title">Tremolo</h3>

					<div className="controls__group--inline">
						<Slider
							displayName={this.props.tremoloDepth.displayName}
							id={this.props.tremoloDepth.id}
							max={this.props.tremoloDepth.max}
							min={this.props.tremoloDepth.min}
							step={this.props.tremoloDepth.step}
							val={this.props.tremoloDepth.val} />
						<Slider
							displayName={this.props.tremoloRate.displayName}
							id={this.props.tremoloRate.id}
							max={this.props.tremoloRate.max}
							min={this.props.tremoloRate.min}
							step={this.props.tremoloRate.step}
							val={this.props.tremoloRate.val} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = GainControls;