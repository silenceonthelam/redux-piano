var pianoKeyGenerator = require("../piano-key-generator.js");

describe("piano-key-generator", function() {
    it("should return the correct number of keys based on width", function() {
        var numKeys = pianoKeyGenerator.getNumKeys(1200);
        // 1200 = 24
        expect(numKeys).toBe(24);

        var numKeys2 = pianoKeyGenerator.getNumKeys(1500);
        expect(numKeys2).toBe(49);

        // piano width is limited to 1600
        var numKeys3 = pianoKeyGenerator.getNumKeys(1600),
            numKeys4 = pianoKeyGenerator.getNumKeys(2000);
        expect(numKeys3).toEqual(numKeys4);
    });
});

// describe("components - gravatar - ", function() {
    // //   it("should set image source with Gravatar url and hashed email address", function() {
    // //       var email = "test@email.com",
    // //           gravatar = TestUtils.renderIntoDocument(<gravatar email="{email}">),
    // //           dom = TestUtils.findRenderedDOMComponentWithTag(gravatar, "div").getDOMNode();
            
    // //       expect(dom.querySelector("img").getAttribute("src") === "http://www.gravatar.com/avatar/" + md5(email)).toBe(true);
    // //   });
    // // });

    // // var React = requirse('react');
    // // var TestUtils = require('react/lib/ReactTestUtils'); 
    // // //I like using the Test Utils, but you can just use the DOM API instead.
    // // var expect = require('expect');
    // // var Root = require('../root'); 
    // // //my root-test lives in components/__tests__/, so this is how I require in my components.

    // // describe('root', function () {
    // //   it('renders without problems', function () {
    // //     var root = TestUtils.renderIntoDocument(<Root/>);
    // //     expect(root).toExist();
    // //   });
    // // });

    // // var React = require('react/addons'),
    // //     RandomPicker = require('../RandomPicker.jsx'),
    // //     TestUtils = React.addons.TestUtils,
    // //     expect = require('expect');

    // // describe("RandomPicker", function () {
    // //     it("loads without error", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker />
    // //         );

    // //         expect(picker).toExist();
    // //     });

    // //     it("shows two inputs for normal distribution", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker initialDistribution="normal" />
    // //         );

    // //         var input = TestUtils.scryRenderedDOMComponentsWithTag(
    // //             picker, "input"
    // //         );

    // //         expect(input.length).toEqual(2);
    // //     });

    // //     it("shows two inputs for logNormal distribution", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker initialDistribution="logNormal" />
    // //         );

    // //         var input = TestUtils.scryRenderedDOMComponentsWithTag(
    // //             picker, "input"
    // //         );

    // //         expect(input.length).toEqual(2);
    // //     });

    // //     it("shows one input for bates distribution", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker initialDistribution="bates" />
    // //         );

    // //         var input = TestUtils.scryRenderedDOMComponentsWithTag(
    // //             picker, "input"
    // //         );

    // //         expect(input.length).toEqual(1);
    // //     });

    // //     it("shows one input for irwinHall distribution", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker initialDistribution="irwinHall" />
    // //         );

    // //         var input = TestUtils.scryRenderedDOMComponentsWithTag(
    // //             picker, "input"
    // //         );

    // //         expect(input.length).toEqual(1);
    // //     });

    // //     it("shows a distributions dropdown", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker />
    // //         );

    // //         var select = TestUtils.findRenderedDOMComponentWithTag(
    // //             picker, "select"
    // //         ),
    // //             options = TestUtils.scryRenderedDOMComponentsWithTag(
    // //                 select, "option"
    // //             );

    // //         expect(select).toExist();
    // //         expect(options.length).toEqual(4);
    // //     });

    // //     it("changes distribution", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker initialDistribution="normal" />
    // //         );

    // //         var select = TestUtils.findRenderedDOMComponentWithTag(
    // //             picker, "select"
    // //         );

    // //         TestUtils.Simulate.change(select.getDOMNode(), {target: {value: "bates"}});

    // //         expect(picker.state.distribution).toEqual("bates");
    // //     });

    // //     it("saves input values", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker />
    // //         ),
    // //             mean = TestUtils.findRenderedDOMComponentWithClass(
    // //                 picker, "mean"
    // //             ),
    // //             deviation = TestUtils.findRenderedDOMComponentWithClass(
    // //                 picker, "deviation"
    // //             );

    // //         TestUtils.Simulate.change(mean.getDOMNode(),
    // //                                   {target: {value: 3, name: "mean"}});
    // //         TestUtils.Simulate.change(deviation.getDOMNode(),
    // //                                   {target: {value: 1, name: "deviation"}});

    // //         expect(picker.state.mean).toEqual(3);
    // //         expect(picker.state.deviation).toEqual(1);
    // //     });

    // //     it("ensures inputs are always Number", function () {
    // //         var picker = TestUtils.renderIntoDocument(
    // //             <RandomPicker />
    // //         );

    // //         ["mean", "deviation"].forEach(function (key) {
    // //             var input = TestUtils.findRenderedDOMComponentWithClass(
    // //                 picker, key
    // //             );

    // //             TestUtils.Simulate.change(input.getDOMNode(),
    // //                                       {target: {value: "", name: key}});

    // //             expect(picker.state[key]).toEqual(0);
    // //         });
    // //     });
    // // });

// var React = require('react/addons'),
    //     ScatterPlot = require('../ScatterPlot.jsx'),
    //     TestUtils = React.addons.TestUtils,
    //     expect = require('expect');

    // describe('ScatterPlot', function () {
    //     var normal = d3.random.normal(1, 1),
    //         mockData = d3.range(5).map(function () {
    //         return {x: normal(), y: normal()};
    //     });

    //     it("renders an h1", function () {
    //         var scatterplot = TestUtils.renderIntoDocument(
    //             <ScatterPlot />
    //         );

    //         var h1 = TestUtils.findRenderedDOMComponentWithTag(
    //             scatterplot, 'h1'
    //         );

    //         expect(h1.getDOMNode().textContent).toEqual("This is a random scatterplot");
    //     });

    //     it("renders an svg with appropriate dimensions", function () {
    //         var scatterplot = TestUtils.renderIntoDocument(
    //             <ScatterPlot width="500" height="500" />
    //         );

    //         var svg = TestUtils.findRenderedDOMComponentWithTag(
    //             scatterplot, 'svg'
    //         );

    //         expect(svg.getDOMNode().getAttribute("width")).toEqual('500');
    //         expect(svg.getDOMNode().getAttribute("height")).toEqual('500');
    //     });

    //     it("renders a circle for each datapoint", function () {
    //         var scatterplot = TestUtils.renderIntoDocument(
    //             <ScatterPlot data={mockData} />
    //         );

    //         var circles = TestUtils.scryRenderedDOMComponentsWithTag(
    //             scatterplot, 'circle'
    //         );

    //         expect(circles.length).toEqual(5);
    //     });

    //     it("keeps circles in bounds", function () {
    //         var scatterplot = TestUtils.renderIntoDocument(
    //             <ScatterPlot data={mockData} width="500" height="500" />
    //         );

    //         var circles = TestUtils.scryRenderedDOMComponentsWithTag(
    //             scatterplot, 'circle'
    //         );

    //         circles.forEach(function (circle) {
    //             var cx = circle.getDOMNode().getAttribute("cx"),
    //                 cy = circle.getDOMNode().getAttribute("cy");

    //             expect(Number(cx)).toBeMoreThan(0)
    //                               .toBeLessThan(500);
    //             expect(Number(cy)).toBeMoreThan(0)
    //                               .toBeLessThan(500);
    //         });
    //     });
    // });

// http://flipmail.co/
// https://formspree.io/