"use strict";

var AudioParamActions = require("../../actions/AudioParamActions"),
    React             = require("react");

var SliderGroup = React.createClass({
    propTypes: {
        sliders: React.PropTypes.object
    },
    getDefaultProps: function() {
        return {
            sliders: {}
        };
    },
    render: function() {
        return (
            <div className="controls__group--slider">
                {this.renderSliders(this.props.sliders)}
            </div>
        );
    },
    renderSliders: function(sliders) {
        return Object.keys(sliders).map(function(key) {
            var slider = sliders[key];

            return (
                <label className="controls__label--slider--small"
                    htmlFor={slider.id}
                    key={slider.id}>
                    
                    <span className="controls__label__text--slider--small">
                        {slider.displayName}
                    </span>

                    <input className="controls__slider--small"
                        max={slider.max}
                        min={slider.min}
                        name="ampEnv"
                        onChange={this.updateVal}
                        step={slider.step}
                        type="range"
                        value={slider.val} />
                </label>
            );
        }.bind(this));
    },
    updateVal: function(e) {
        AudioParamActions.updateValue(e.target.value, this.props.id);
    }
});

module.exports = SliderGroup;