"use strict";

var ButtonGroup = require("./common/ButtonGroup"),
	React  	    = require("react"),
	Slider 	    = require("./common/Slider");

var OscParams = React.createClass({
	render: function() {
		return (
			<div className="osc-params__wrapper">
				<h3 className="param__title">Lfo</h3>
	            <section className="osc-params">
	                <ButtonGroup
	                    btnMod="--round--small"
	                    buttons={this.props.lfo}
	                    classMod="--osc--small"
	                    name="lfo" />

	                <div className="lfo-group">
	                    <Slider
	                        displayName={this.props.lfoRate.displayName}
	                        id={this.props.lfoRate.id}
	                        max={this.props.lfoRate.max}
	                        min={this.props.lfoRate.min}
	                        step={this.props.lfoRate.step}
	                        val={this.props.lfoRate.val} />
	                    <Slider
	                        displayName={this.props.lfoDepth.displayName}
	                        id={this.props.lfoDepth.id}
	                        max={this.props.lfoDepth.max}
	                        min={this.props.lfoDepth.min}
	                        step={this.props.lfoDepth.step}
	                        val={this.props.lfoDepth.val} />
	                </div>                                                                                                                                                               
					<ButtonGroup
				        btnMod="--round--small"
	                    buttons={this.props.noise}
	                    classMod="--osc--small"
	                    name="noise" />
				</section>
			</div>
		);
	}
});

module.exports = OscParams;