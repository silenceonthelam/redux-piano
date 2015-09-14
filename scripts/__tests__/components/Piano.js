jest.dontMock("../../components/Piano.jsx");

describe("Piano", function() {

	var React,
		TestUtils,
		Piano;

	beforeEach(function() {
		React = require("react/addons");
		TestUtils = React.addons.TestUtils;
		Piano = require("../../components/Piano.jsx");
	});

	it("should exist", function() {
		var piano = TestUtils.renderIntoDocument(
				<Piano />
			),
			renderedPiano = TestUtils.findRenderedDOMComponentWithClass(
				Piano, "piano");


		expect(piano).toBeDefined();
		expect(renderedPiano).toBeDefined();
	});
});