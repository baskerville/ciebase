"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var _Math = Math;
var PI = _Math.PI;

function fromRadian(r) {
	var d = r * 180 / PI;
	while (d < 0) {
		d += 360;
	}
	while (d > 360) {
		d -= 360;
	}
	return d;
}

function toRadian(d) {
	var r = PI * d / 180;
	while (r < 0) {
		r += 2 * PI;
	}
	while (r > 2 * PI) {
		r -= 2 * PI;
	}
	return r;
}

exports.fromRadian = fromRadian;
exports.toRadian = toRadian;