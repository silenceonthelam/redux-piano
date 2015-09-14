"use strict";

var AudioParamActions = require("../../actions/AudioParamActions"),
    React             = require("react");

var ButtonGroup = React.createClass({
    propTypes: {
        buttonMod: React.PropTypes.string,
        buttons: React.PropTypes.object,
        classMod: React.PropTypes.string,
        val: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            buttonMod: "",
            buttons: {},
            classMod: "",
            val: ""
        };
    },
    render: function() {
        var classMod = "--osc";

        if (this.props.classMod) {
            classMod = this.props.classMod;
        }

        return (
            <div className={"controls__group" + classMod}>
                {this.renderItems(this.props.buttons)}
            </div>
        );
    },
    renderItems: function(items) {
        return Object.keys(items).map(function(key) {
            var item = items[key];

            var isChecked = item.on,
                btnMod = "",
                classMod = "",
                checkedMod = "";

            if (this.props.btnMod) {
                btnMod = this.props.btnMod;
            }

            if (this.props.classMod) {
                classMod = this.props.classMod;
            }

            if (isChecked) {
                checkedMod += "--checked";
            }

            return (
                <label className={"controls__label" + classMod}
                        htmlFor={item.id} key={key}>
                    <span className={"controls__label__text" + classMod + checkedMod}>
                        {item.displayName}
                    </span>
                    <input
                        checked={isChecked}
                        className={"controls__btn" + btnMod}
                        id={item.id}
                        name={this.props.name}
                        onChange={this.updateVal}
                        type="radio"
                        value={item.val} />
                </label>
            );
        }.bind(this));
    },
    updateVal: function(e) {
        PianoActions.updateValue(e.target.value, this.props.id);
    }
});

module.exports = ButtonGroup;