"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// 3x3 matrices operations

function transpose(M) {
	return [[M[0][0], M[1][0], M[2][0]], [M[0][1], M[1][1], M[2][1]], [M[0][2], M[1][2], M[2][2]]];
}

function determinant(M) {
	return M[0][0] * (M[2][2] * M[1][1] - M[2][1] * M[1][2]) + M[1][0] * (M[2][1] * M[0][2] - M[2][2] * M[0][1]) + M[2][0] * (M[1][2] * M[0][1] - M[1][1] * M[0][2]);
}

function inverse(M) {
	var c = 1 / determinant(M);
	return [[(M[2][2] * M[1][1] - M[2][1] * M[1][2]) * c, (M[2][1] * M[0][2] - M[2][2] * M[0][1]) * c, (M[1][2] * M[0][1] - M[1][1] * M[0][2]) * c], [(M[2][0] * M[1][2] - M[2][2] * M[1][0]) * c, (M[2][2] * M[0][0] - M[2][0] * M[0][2]) * c, (M[1][0] * M[0][2] - M[1][2] * M[0][0]) * c], [(M[2][1] * M[1][0] - M[2][0] * M[1][1]) * c, (M[2][0] * M[0][1] - M[2][1] * M[0][0]) * c, (M[1][1] * M[0][0] - M[1][0] * M[0][1]) * c]];
}

function multiply(M, v) {
	return [M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2], M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2], M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2]];
}

function scalar(M, v) {
	return [[M[0][0] * v[0], M[0][1] * v[1], M[0][2] * v[2]], [M[1][0] * v[0], M[1][1] * v[1], M[1][2] * v[2]], [M[2][0] * v[0], M[2][1] * v[1], M[2][2] * v[2]]];
}

function product(M, N) {
	return [[M[0][0] * N[0][0] + M[0][1] * N[1][0] + M[0][2] * N[2][0], M[0][0] * N[0][1] + M[0][1] * N[1][1] + M[0][2] * N[2][1], M[0][0] * N[0][2] + M[0][1] * N[1][2] + M[0][2] * N[2][2]], [M[1][0] * N[0][0] + M[1][1] * N[1][0] + M[1][2] * N[2][0], M[1][0] * N[0][1] + M[1][1] * N[1][1] + M[1][2] * N[2][1], M[1][0] * N[0][2] + M[1][1] * N[1][2] + M[1][2] * N[2][2]], [M[2][0] * N[0][0] + M[2][1] * N[1][0] + M[2][2] * N[2][0], M[2][0] * N[0][1] + M[2][1] * N[1][1] + M[2][2] * N[2][1], M[2][0] * N[0][2] + M[2][1] * N[1][2] + M[2][2] * N[2][2]]];
}

exports.transpose = transpose;
exports.determinant = determinant;
exports.inverse = inverse;
exports.multiply = multiply;
exports.scalar = scalar;
exports.product = product;