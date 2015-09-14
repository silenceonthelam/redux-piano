var assign      = require("object-assign"),
    ButtonGroup = require("./common/ButtonGroup"),
    OscDetune   = require("./OscDetune"),
    React       = require("react"),
    Slider      = require("./common/Slider")

var OscButtonGroup = React.createClass({
    render: function() {
        return (
            <section className="oscs-group">
                <h3 className="param__title">Oscs</h3>
                {this.renderOsc(this.props.oscs)}
            </section>
        );
    },
    renderOsc: function(oscs) {
        return Object.keys(oscs).map(function(key, i) {
            var osc = oscs[key];
            var currentOsc = "osc" + (i + 1);

            console.log(currentOsc);

            return (
                <div className="osc-group">
                    <ButtonGroup
                        btnMod="--round--small"
                        buttons={osc}
                        classMod="--osc--small"
                        name={"osc" + i} />

                    <OscDetune 
                        fineTune={this.props.fineTune[currentOsc]}
                        octaveTune={this.props.octaveTune[currentOsc]}
                        semitoneTune={this.props.semitoneTune[currentOsc]} />    
                </div>
            );
        }.bind(this));
    }
});

module.exports = OscButtonGroup;