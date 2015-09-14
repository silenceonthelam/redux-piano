"use strict";

var React = require("react"),
    Slider = require("./common/Slider");

var Delay = React.createClass({
    render: function() {
        return (
            <div className="delay-group__wrapper">
                <h3 className="param__title">Delay</h3>  
                <section className="delay-group">    
                    <Slider
                        displayName={this.props.delayAttack.displayName}
                        id={this.props.delayAttack.id}
                        max={this.props.delayAttack.max}
                        min={this.props.delayAttack.min}
                        step={this.props.delayAttack.step}
                        val={this.props.delayAttack} />
                    <Slider
                        displayName={this.props.delayDry.displayName}
                        id={this.props.delayDry.id}
                        max={this.props.delayDry.max}
                        min={this.props.delayDry.min}
                        step={this.props.delayDry.step}
                        val={this.props.delayDry} />
                    <Slider
                        displayName={this.props.delayWet.displayName}
                        id={this.props.delayWet.id}
                        max={this.props.delayWet.max}
                        min={this.props.delayWet.min}
                        step={this.props.delayWet.step}
                        val={this.props.delayWet} />
                    <Slider
                        displayName={this.props.delayRelease.displayName}
                        id={this.props.delayRelease.id}
                        max={this.props.delayRelease.max}
                        min={this.props.delayRelease.min}
                        step={this.props.delayRelease.step}
                        val={this.props.delayRelease} />
                    <Slider
                        displayName={this.props.delayRepeat.displayName}
                        id={this.props.delayRepeat.id}
                        max={this.props.delayRepeat.max}
                        min={this.props.delayRepeat.min}
                        step={this.props.delayRepeat.step}
                        val={this.props.delayRepeat} />
                    <Slider
                        displayName={this.props.delayTime.displayName}
                        id={this.props.delayTime.id}
                        max={this.props.delayTime.max}
                        min={this.props.delayTime.min}
                        step={this.props.delayTime.step}
                        val={this.props.delayTime} />                                                        
                </section>
            </div>
        );
    }
});

module.exports = Delay;