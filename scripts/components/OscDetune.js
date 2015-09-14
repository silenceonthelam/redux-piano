"use strict";

var React = require("react"),
    Slider = require("./common/Slider");

var OscDetune = React.createClass({
    render: function() {
        return (
            <div className="osc-detune__wrapper">
                <h3 className="param__title">Detune</h3>
                <section className="osc-detune">
                    <Slider
                        displayName={this.props.fineTune.displayName}
                        id={this.props.fineTune.id}
                        max={this.props.fineTune.max}
                        min={this.props.fineTune.min}
                        step={this.props.fineTune.step}
                        val={this.props.fineTune} />
                    <Slider
                        displayName={this.props.semitoneTune.displayName}
                        id={this.props.semitoneTune.id}
                        max={this.props.semitoneTune.max}
                        min={this.props.semitoneTune.min}
                        step={this.props.semitoneTune.step}
                        val={this.props.semitoneTune} />
                    <Slider
                        displayName={this.props.octaveTune.displayName}
                        id={this.props.octaveTune.id}
                        max={this.props.octaveTune.max}
                        min={this.props.octaveTune.min}
                        step={this.props.octaveTune.step}
                        val={this.props.octaveTune} />
                </section>
            </div>
        );
    }
});

module.exports = OscDetune;