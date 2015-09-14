"use strict";

var AudioParamActions = require("../../actions/AudioParamActions"),
    React             = require("react");

var Slider = React.createClass({ 
    propTypes: {
        displayName: React.PropTypes.string,
        id: React.PropTypes.string,
        max: React.PropTypes.number,
        min: React.PropTypes.number,
        step: React.PropTypes.number,
        val: React.PropTypes.number
    },
    getDefaultProps: function() {
        return {
            displayName: "",
            id: "",
            max: 1,
            min: 0,
            step: 0.01,
            val: 0
        };
    },
    render: function() {
        var id = this.props.id,
            name = "";      

        var classMod = "";

        if (this.props.classMod) {
            classMod = this.props.classMod;
        }

        return (
            <label className={"controls__label--slider" + classMod}
                    htmlFor={id} key={id}>
                <span className={"controls__label__text--slider" + classMod}>
                    {this.props.displayName}
                </span>
                <input 
                    className={"controls__slider"  + classMod}
                    id={id}
                    max={this.props.max}
                    min={this.props.min}
                    name={name}
                    onChange={this.updateVal}
                    step={this.props.step}
                    type="range"
                    value={this.props.val} />
            </label>
        );
    },
    updateVal: function(e) {
        AudioParamActions.updateValue(e.target.value, this.props.id);
    }
});

module.exports = Slider;