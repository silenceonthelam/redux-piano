"use strict";

var ButtonGroup = require("./common/ButtonGroup"),
    React       = require("react"),
    Slider      = require("./common/Slider");

var FilterControls = React.createClass({
    render: function() {
        return (
            <div className="filter-group__wrapper">
                <h3 className="param__title">Filter</h3>
                <section className="filter-group">
                    <div className="filter-type">
                        <ButtonGroup
                            btnMod="--round--small"
                            buttons={this.props.filterTypes}
                            classMod="--osc--small"
                            name="filterType" />
                    </div>

                    <Slider
                        displayName={this.props.filterCutoffFreq.displayName}
                        id={this.props.filterCutoffFreq.id}
                        max={this.props.filterCutoffFreq.max}
                        min={this.props.filterCutoffFreq.min}
                        step={this.props.filterCutoffFreq.step}
                        val={this.props.filterCutoffFreq.val} />
                    <Slider
                        displayName={this.props.filterRes.displayName}
                        id={this.props.filterRes.id}
                        max={this.props.filterRes.max}
                        min={this.props.filterRes.min}
                        step={this.props.filterRes.step}
                        val={this.props.filterRes.val} />                                                                                                                                                                                                   
                </section>
            </div>
        );
    }
});

module.exports = FilterControls;