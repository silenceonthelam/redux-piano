describe("utils", function() {
    it("should return a camelcase string", function() {
        displayNamify("man-potato");

        expect(charAt(0)).toBe("m");
        expect(charAt(4)).toBe("P");
    });

    it("should return a display name string", function() {
        humpify("man-potato");

        expect(charAt(0)).toBe("M");
        expect(charAt(4)).toBe(" ");
        expect(charAt(5)).toBe("P");
    });
});




















it("renders an h1", function () {
    var component = TestUtils.renderIntoDocument(
        <MyComponent />
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );

    expect(h1.getDOMNode().textContent).toEqual("A title");
});

var node = component
   .findRenderedDOMComponentWithTag('button').getDOMNode();

TestUtils.Simulate.click(node);





























// package.json
// {
//   "name": "react-testing-example",
//   "description": "A sample project to investigate testing options with ReactJS",
//   "scripts": {
//     "test": "karma start"
//   },
// // ...
//   "homepage": "https://github.com/Swizec/react-testing-example",
//   "devDependencies": {
//     "babel-core": "^5.2.17",
//     "babel-loader": "^5.0.0",
//     "d3": "^3.5.5",
//     "expect": "^1.6.0",
//     "jsx-loader": "^0.13.2",
//     "karma": "^0.12.31",
//     "karma-chrome-launcher": "^0.1.10",
//     "karma-cli": "0.0.4",
//     "karma-mocha": "^0.1.10",
//     "karma-sourcemap-loader": "^0.3.4",
//     "karma-webpack": "^1.5.1",
//     "mocha": "^2.2.4",
//     "react": "^0.13.3",
//     "react-hot-loader": "^1.2.7",
//     "react-tools": "^0.13.3",
//     "webpack": "^1.9.4",
//     "webpack-dev-server": "^1.8.2"
//   }
// }

// npm test or karma start


// tests.webpack.js
// var context = require.context('./src', true, /-test\.jsx?$/);
// context.keys().forEach(context);
// // This tells Webpack to consider anything with a -test suffix to be part of the test suite.

// // karma.conf.js
// var webpack = require('webpack');

// module.exports = function (config) {
//     config.set({
//         browsers: ['Chrome'],
//         singleRun: true,
//         frameworks: ['mocha'],
//         files: [
//             'tests.webpack.js'
//         ],
//         preprocessors: {
//             'tests.webpack.js': ['webpack']
//         },
//         reporters: ['dots'],
//         webpack: {
//             module: {
//                 loaders: [
//                     {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
//                 ]
//             },
//             watch: true
//         },
//         webpackServer: {
//             noInfo: true
//         }
//     });
// };

// UI Test
// Render.
// Find specific node.
// Check contents.

// ScatterPlot-test.jsx
//jest.dontMock('../src/ScatterPlot.jsx');

// var React = require('react/addons'),
//     ScatterPlot = require('../ScatterPlot.jsx'),
//     TestUtils = React.addons.TestUtils,
//     expect = require('expect');

// var d3 = require('d3');

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




// var React = require('react/addons'),
//     RandomPicker = require('../RandomPicker.jsx'),
//     TestUtils = React.addons.TestUtils,
//     expect = require('expect');

// describe("RandomPicker", function () {
//     it("loads without error", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker />
//         );

//         expect(picker).toExist();
//     });

//     it("shows two inputs for normal distribution", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker initialDistribution="normal" />
//         );

//         var input = TestUtils.scryRenderedDOMComponentsWithTag(
//             picker, "input"
//         );

//         expect(input.length).toEqual(2);
//     });

//     it("shows two inputs for logNormal distribution", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker initialDistribution="logNormal" />
//         );

//         var input = TestUtils.scryRenderedDOMComponentsWithTag(
//             picker, "input"
//         );

//         expect(input.length).toEqual(2);
//     });

//     it("shows one input for bates distribution", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker initialDistribution="bates" />
//         );

//         var input = TestUtils.scryRenderedDOMComponentsWithTag(
//             picker, "input"
//         );

//         expect(input.length).toEqual(1);
//     });

//     it("shows one input for irwinHall distribution", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker initialDistribution="irwinHall" />
//         );

//         var input = TestUtils.scryRenderedDOMComponentsWithTag(
//             picker, "input"
//         );

//         expect(input.length).toEqual(1);
//     });

//     it("shows a distributions dropdown", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker />
//         );

//         var select = TestUtils.findRenderedDOMComponentWithTag(
//             picker, "select"
//         ),
//             options = TestUtils.scryRenderedDOMComponentsWithTag(
//                 select, "option"
//             );

//         expect(select).toExist();
//         expect(options.length).toEqual(4);
//     });

//     it("changes distribution", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker initialDistribution="normal" />
//         );

//         var select = TestUtils.findRenderedDOMComponentWithTag(
//             picker, "select"
//         );

//         TestUtils.Simulate.change(select.getDOMNode(), {target: {value: "bates"}});

//         expect(picker.state.distribution).toEqual("bates");
//     });

//     it("saves input values", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker />
//         ),
//             mean = TestUtils.findRenderedDOMComponentWithClass(
//                 picker, "mean"
//             ),
//             deviation = TestUtils.findRenderedDOMComponentWithClass(
//                 picker, "deviation"
//             );

//         TestUtils.Simulate.change(mean.getDOMNode(),
//                                   {target: {value: 3, name: "mean"}});
//         TestUtils.Simulate.change(deviation.getDOMNode(),
//                                   {target: {value: 1, name: "deviation"}});

//         expect(picker.state.mean).toEqual(3);
//         expect(picker.state.deviation).toEqual(1);
//     });

//     it("ensures inputs are always Number", function () {
//         var picker = TestUtils.renderIntoDocument(
//             <RandomPicker />
//         );

//         ["mean", "deviation"].forEach(function (key) {
//             var input = TestUtils.findRenderedDOMComponentWithClass(
//                 picker, key
//             );

//             TestUtils.Simulate.change(input.getDOMNode(),
//                                       {target: {value: "", name: key}});

//             expect(picker.state[key]).toEqual(0);
//         });
//     });
// });
