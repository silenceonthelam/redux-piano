"use strict";

var ButtonGroup    = require("./common/ButtonGroup"),
	Delay 	   	   = require("./Delay"),
	DisplayControl = require("./DisplayControl"),
	FilterControls = require("./FilterControls"),
	GainControls   = require("./GainControls"),
	OscButtonGroup = require("./OscButtonGroup"),
	OscParams 	   = require("./OscParams"),
	React 		   = require("react"),
	Slider    	   = require("./common/Slider"),
	SliderGroup    = require("./common/SliderGroup"),
	Temperaments   = require("./Temperaments");

var PianoControls = React.createClass({
	render: function() {
		return (
			<div className="piano__controls">
				<div className="piano__controls__col">
					<div className="piano__controls__col--two-thirds">
						<OscButtonGroup 
							fineTune={this.props.audioParams["detune"].fineTune}
							octaveTune={this.props.audioParams["detune"].octaveTune}
							oscs={this.props.audioParams["oscs"]}
	                        semitoneTune={this.props.audioParams["detune"].semitoneTune} />
						<FilterControls
							filterCutoffFreq={this.props.audioParams["filter"].filterCutoffFreq}
							filterRes={this.props.audioParams["filter"].filterRes}
							filterTypes={this.props.audioParams["filter"].filterTypes} />
						<OscParams 
							lfo={this.props.audioParams["lfo"].osc}
							lfoDepth={this.props.audioParams["lfo"].lfoDepth}
							lfoRate={this.props.audioParams["lfo"].lfoRate}
							noise={this.props.audioParams["noise"]} />
					</div>
					<div className="piano__controls__col--one-third">
						<Delay 
							delayAttack={this.props.audioParams["delay"].delayAttack}
							delayDry={this.props.audioParams["delay"].delayDry}
							delayRelease={this.props.audioParams["delay"].delayRelease}
							delayRepeat={this.props.audioParams["delay"].delayRepeat}
							delayTime={this.props.audioParams["delay"].delayTime}
							delayWet={this.props.audioParams["delay"].delayWet} />
						<div className="vibrato">
							<h3 className="param__title">Vibrato</h3>
							<div className="controls__group--inline">
				                <Slider
				                    displayName={this.props.audioParams["vibrato"].vibratoDepth.displayName}
				                    id={this.props.audioParams["vibrato"].vibratoDepth.id}
				                    max={this.props.audioParams["vibrato"].vibratoDepth.max}
				                    min={this.props.audioParams["vibrato"].vibratoDepth.min}
				                    step={this.props.audioParams["vibrato"].vibratoDepth.step}
				                    val={this.props.audioParams["vibrato"].vibratoDepth.val} />
				                <Slider
				                    displayName={this.props.audioParams["vibrato"].vibratoRate.displayName}
				                    id={this.props.audioParams["vibrato"].vibratoRate.id}
				                    max={this.props.audioParams["vibrato"].vibratoRate.max}
				                    min={this.props.audioParams["vibrato"].vibratoRate.min}
				                    step={this.props.audioParams["vibrato"].vibratoRate.step}
				                    val={this.props.audioParams["vibrato"].vibratoRate.val} />	
			                </div>
						</div>
					</div>
				</div>
				<div className="piano__controls__col--mid">
					<DisplayControl
						noteFreq={this.props.freq}
						noteName={this.props.pitchClass} />
					<Temperaments
						temperaments={this.props.audioParams["temperaments"]} />
				</div>
				<div className="piano__controls__col--env">
					<GainControls
						drive={this.props.audioParams["drive"]}
						masterGain={this.props.audioParams["gain"].masterGain}
						noiseGain={this.props.audioParams["gain"].noiseGain}
						osc1Gain={this.props.audioParams["gain"].osc1Gain}
						osc2Gain={this.props.audioParams["gain"].osc2Gain}
						pan={this.props.audioParams["pan"]}
						tremoloDepth={this.props.audioParams["tremolo"].tremoloDepth}
						tremoloRate={this.props.audioParams["tremolo"].tremoloRate} />
					<div className="sliders--stacked">
						<h3 className="param__title">Amp Env</h3>
						<SliderGroup
							sliders={this.props.audioParams["ampEnv"]} />
						<h3 className="param__title">Filter Env</h3>
						<SliderGroup
							sliders={this.props.audioParams["filterEnv"]} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = PianoControls;