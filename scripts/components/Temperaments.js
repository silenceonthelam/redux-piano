"use strict";

var ButtonGroup = require("./common/ButtonGroup"),
    React       = require("react");

var Temperaments = React.createClass({
    render: function() {
        return (
            <div className="group--inline__wrapper">
                <h3 className="param__title">Temperaments</h3>
                <section className="group--inline">
                    <ButtonGroup
                        btnMod="--square"
                        buttons={this.props.temperaments}
                        classMod="--temperament"
                        name="temperaments" />
                </section>
            </div>
        );
    }
});

module.exports = Temperaments;