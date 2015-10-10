var XyzConv = require("../dist/xyz"),
    assert = require('chai').assert,
    ε = 0.05;

describe("Roundtrips", function () {
	var degree = require("../dist/degree"),
	    rgb = require("../dist/rgb"),
	    xyz = XyzConv(),
	    hex = "#e73e01",
	    RGB = rgb.fromHex(hex),
	    XYZ = xyz.fromRgb(RGB);
	it("Degree", function () {
		var r = 2 * Math.PI / 3;
		assert.closeTo(r, degree.toRadian(degree.fromRadian(r)), ε);
	});
	it("Rgb", function () {
		assert.equal(hex, rgb.toHex(RGB));
	});
	it("Xyz", function () {
		var rRGB = xyz.toRgb(XYZ);
		assert.closeTo(RGB[0], rRGB[0], ε);
		assert.closeTo(RGB[1], rRGB[1], ε);
		assert.closeTo(RGB[2], rRGB[2], ε);
	});
});
