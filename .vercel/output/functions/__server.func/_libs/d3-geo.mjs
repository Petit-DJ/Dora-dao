import { n as Adder, t as range } from "./d3-array.mjs";
//#region node_modules/d3-geo/src/math.js
var epsilon = 1e-6;
var pi = Math.PI;
pi / 2;
pi / 4;
var tau = pi * 2;
180 / pi;
pi / 180;
var abs = Math.abs;
var ceil = Math.ceil;
var sqrt = Math.sqrt;
//#endregion
//#region node_modules/d3-geo/src/noop.js
function noop() {}
//#endregion
//#region node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
	if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) streamGeometryType[geometry.type](geometry, stream);
}
var streamObjectType = {
	Feature: function(object, stream) {
		streamGeometry(object.geometry, stream);
	},
	FeatureCollection: function(object, stream) {
		var features = object.features, i = -1, n = features.length;
		while (++i < n) streamGeometry(features[i].geometry, stream);
	}
};
var streamGeometryType = {
	Sphere: function(object, stream) {
		stream.sphere();
	},
	Point: function(object, stream) {
		object = object.coordinates;
		stream.point(object[0], object[1], object[2]);
	},
	MultiPoint: function(object, stream) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
	},
	LineString: function(object, stream) {
		streamLine(object.coordinates, stream, 0);
	},
	MultiLineString: function(object, stream) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) streamLine(coordinates[i], stream, 0);
	},
	Polygon: function(object, stream) {
		streamPolygon(object.coordinates, stream);
	},
	MultiPolygon: function(object, stream) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) streamPolygon(coordinates[i], stream);
	},
	GeometryCollection: function(object, stream) {
		var geometries = object.geometries, i = -1, n = geometries.length;
		while (++i < n) streamGeometry(geometries[i], stream);
	}
};
function streamLine(coordinates, stream, closed) {
	var i = -1, n = coordinates.length - closed, coordinate;
	stream.lineStart();
	while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
	stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
	var i = -1, n = coordinates.length;
	stream.polygonStart();
	while (++i < n) streamLine(coordinates[i], stream, 1);
	stream.polygonEnd();
}
function stream_default(object, stream) {
	if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
	else streamGeometry(object, stream);
}
//#endregion
//#region node_modules/d3-geo/src/graticule.js
function graticuleX(y0, y1, dy) {
	var y = range(y0, y1 - epsilon, dy).concat(y1);
	return function(x) {
		return y.map(function(y) {
			return [x, y];
		});
	};
}
function graticuleY(x0, x1, dx) {
	var x = range(x0, x1 - epsilon, dx).concat(x1);
	return function(y) {
		return x.map(function(x) {
			return [x, y];
		});
	};
}
function graticule() {
	var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
	function graticule() {
		return {
			type: "MultiLineString",
			coordinates: lines()
		};
	}
	function lines() {
		return range(ceil(X0 / DX) * DX, X1, DX).map(X).concat(range(ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(range(ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
			return abs(x % DX) > epsilon;
		}).map(x)).concat(range(ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
			return abs(y % DY) > epsilon;
		}).map(y));
	}
	graticule.lines = function() {
		return lines().map(function(coordinates) {
			return {
				type: "LineString",
				coordinates
			};
		});
	};
	graticule.outline = function() {
		return {
			type: "Polygon",
			coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
		};
	};
	graticule.extent = function(_) {
		if (!arguments.length) return graticule.extentMinor();
		return graticule.extentMajor(_).extentMinor(_);
	};
	graticule.extentMajor = function(_) {
		if (!arguments.length) return [[X0, Y0], [X1, Y1]];
		X0 = +_[0][0], X1 = +_[1][0];
		Y0 = +_[0][1], Y1 = +_[1][1];
		if (X0 > X1) _ = X0, X0 = X1, X1 = _;
		if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
		return graticule.precision(precision);
	};
	graticule.extentMinor = function(_) {
		if (!arguments.length) return [[x0, y0], [x1, y1]];
		x0 = +_[0][0], x1 = +_[1][0];
		y0 = +_[0][1], y1 = +_[1][1];
		if (x0 > x1) _ = x0, x0 = x1, x1 = _;
		if (y0 > y1) _ = y0, y0 = y1, y1 = _;
		return graticule.precision(precision);
	};
	graticule.step = function(_) {
		if (!arguments.length) return graticule.stepMinor();
		return graticule.stepMajor(_).stepMinor(_);
	};
	graticule.stepMajor = function(_) {
		if (!arguments.length) return [DX, DY];
		DX = +_[0], DY = +_[1];
		return graticule;
	};
	graticule.stepMinor = function(_) {
		if (!arguments.length) return [dx, dy];
		dx = +_[0], dy = +_[1];
		return graticule;
	};
	graticule.precision = function(_) {
		if (!arguments.length) return precision;
		precision = +_;
		x = graticuleX(y0, y1, 90);
		y = graticuleY(x0, x1, precision);
		X = graticuleX(Y0, Y1, 90);
		Y = graticuleY(X0, X1, precision);
		return graticule;
	};
	return graticule.extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]]).extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
}
function graticule10() {
	return graticule()();
}
//#endregion
//#region node_modules/d3-geo/src/identity.js
var identity_default = (x) => x;
//#endregion
//#region node_modules/d3-geo/src/path/area.js
var areaSum = new Adder();
var areaRingSum = new Adder();
var x00$2;
var y00$2;
var x0$3;
var y0$3;
var areaStream = {
	point: noop,
	lineStart: noop,
	lineEnd: noop,
	polygonStart: function() {
		areaStream.lineStart = areaRingStart;
		areaStream.lineEnd = areaRingEnd;
	},
	polygonEnd: function() {
		areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop;
		areaSum.add(abs(areaRingSum));
		areaRingSum = new Adder();
	},
	result: function() {
		var area = areaSum / 2;
		areaSum = new Adder();
		return area;
	}
};
function areaRingStart() {
	areaStream.point = areaPointFirst;
}
function areaPointFirst(x, y) {
	areaStream.point = areaPoint;
	x00$2 = x0$3 = x, y00$2 = y0$3 = y;
}
function areaPoint(x, y) {
	areaRingSum.add(y0$3 * x - x0$3 * y);
	x0$3 = x, y0$3 = y;
}
function areaRingEnd() {
	areaPoint(x00$2, y00$2);
}
//#endregion
//#region node_modules/d3-geo/src/path/bounds.js
var x0$2 = Infinity;
var y0$2 = x0$2;
var x1 = -x0$2;
var y1 = x1;
var boundsStream = {
	point: boundsPoint,
	lineStart: noop,
	lineEnd: noop,
	polygonStart: noop,
	polygonEnd: noop,
	result: function() {
		var bounds = [[x0$2, y0$2], [x1, y1]];
		x1 = y1 = -(y0$2 = x0$2 = Infinity);
		return bounds;
	}
};
function boundsPoint(x, y) {
	if (x < x0$2) x0$2 = x;
	if (x > x1) x1 = x;
	if (y < y0$2) y0$2 = y;
	if (y > y1) y1 = y;
}
//#endregion
//#region node_modules/d3-geo/src/path/centroid.js
var X0 = 0;
var Y0 = 0;
var Z0 = 0;
var X1 = 0;
var Y1 = 0;
var Z1 = 0;
var X2 = 0;
var Y2 = 0;
var Z2 = 0;
var x00$1;
var y00$1;
var x0$1;
var y0$1;
var centroidStream = {
	point: centroidPoint,
	lineStart: centroidLineStart,
	lineEnd: centroidLineEnd,
	polygonStart: function() {
		centroidStream.lineStart = centroidRingStart;
		centroidStream.lineEnd = centroidRingEnd;
	},
	polygonEnd: function() {
		centroidStream.point = centroidPoint;
		centroidStream.lineStart = centroidLineStart;
		centroidStream.lineEnd = centroidLineEnd;
	},
	result: function() {
		var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
		X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
		return centroid;
	}
};
function centroidPoint(x, y) {
	X0 += x;
	Y0 += y;
	++Z0;
}
function centroidLineStart() {
	centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
	centroidStream.point = centroidPointLine;
	centroidPoint(x0$1 = x, y0$1 = y);
}
function centroidPointLine(x, y) {
	var dx = x - x0$1, dy = y - y0$1, z = sqrt(dx * dx + dy * dy);
	X1 += z * (x0$1 + x) / 2;
	Y1 += z * (y0$1 + y) / 2;
	Z1 += z;
	centroidPoint(x0$1 = x, y0$1 = y);
}
function centroidLineEnd() {
	centroidStream.point = centroidPoint;
}
function centroidRingStart() {
	centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
	centroidPointRing(x00$1, y00$1);
}
function centroidPointFirstRing(x, y) {
	centroidStream.point = centroidPointRing;
	centroidPoint(x00$1 = x0$1 = x, y00$1 = y0$1 = y);
}
function centroidPointRing(x, y) {
	var dx = x - x0$1, dy = y - y0$1, z = sqrt(dx * dx + dy * dy);
	X1 += z * (x0$1 + x) / 2;
	Y1 += z * (y0$1 + y) / 2;
	Z1 += z;
	z = y0$1 * x - x0$1 * y;
	X2 += z * (x0$1 + x);
	Y2 += z * (y0$1 + y);
	Z2 += z * 3;
	centroidPoint(x0$1 = x, y0$1 = y);
}
//#endregion
//#region node_modules/d3-geo/src/path/context.js
function PathContext(context) {
	this._context = context;
}
PathContext.prototype = {
	_radius: 4.5,
	pointRadius: function(_) {
		return this._radius = _, this;
	},
	polygonStart: function() {
		this._line = 0;
	},
	polygonEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		if (this._line === 0) this._context.closePath();
		this._point = NaN;
	},
	point: function(x, y) {
		switch (this._point) {
			case 0:
				this._context.moveTo(x, y);
				this._point = 1;
				break;
			case 1:
				this._context.lineTo(x, y);
				break;
			default:
				this._context.moveTo(x + this._radius, y);
				this._context.arc(x, y, this._radius, 0, tau);
		}
	},
	result: noop
};
//#endregion
//#region node_modules/d3-geo/src/path/measure.js
var lengthSum = new Adder();
var lengthRing;
var x00;
var y00;
var x0;
var y0;
var lengthStream = {
	point: noop,
	lineStart: function() {
		lengthStream.point = lengthPointFirst;
	},
	lineEnd: function() {
		if (lengthRing) lengthPoint(x00, y00);
		lengthStream.point = noop;
	},
	polygonStart: function() {
		lengthRing = true;
	},
	polygonEnd: function() {
		lengthRing = null;
	},
	result: function() {
		var length = +lengthSum;
		lengthSum = new Adder();
		return length;
	}
};
function lengthPointFirst(x, y) {
	lengthStream.point = lengthPoint;
	x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
	x0 -= x, y0 -= y;
	lengthSum.add(sqrt(x0 * x0 + y0 * y0));
	x0 = x, y0 = y;
}
//#endregion
//#region node_modules/d3-geo/src/path/string.js
var cacheDigits;
var cacheAppend;
var cacheRadius;
var cacheCircle;
var PathString = class {
	constructor(digits) {
		this._append = digits == null ? append : appendRound(digits);
		this._radius = 4.5;
		this._ = "";
	}
	pointRadius(_) {
		this._radius = +_;
		return this;
	}
	polygonStart() {
		this._line = 0;
	}
	polygonEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		if (this._line === 0) this._ += "Z";
		this._point = NaN;
	}
	point(x, y) {
		switch (this._point) {
			case 0:
				this._append`M${x},${y}`;
				this._point = 1;
				break;
			case 1:
				this._append`L${x},${y}`;
				break;
			default:
				this._append`M${x},${y}`;
				if (this._radius !== cacheRadius || this._append !== cacheAppend) {
					const r = this._radius;
					const s = this._;
					this._ = "";
					this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
					cacheRadius = r;
					cacheAppend = this._append;
					cacheCircle = this._;
					this._ = s;
				}
				this._ += cacheCircle;
		}
	}
	result() {
		const result = this._;
		this._ = "";
		return result.length ? result : null;
	}
};
function append(strings) {
	let i = 1;
	this._ += strings[0];
	for (const j = strings.length; i < j; ++i) this._ += arguments[i] + strings[i];
}
function appendRound(digits) {
	const d = Math.floor(digits);
	if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
	if (d > 15) return append;
	if (d !== cacheDigits) {
		const k = 10 ** d;
		cacheDigits = d;
		cacheAppend = function append(strings) {
			let i = 1;
			this._ += strings[0];
			for (const j = strings.length; i < j; ++i) this._ += Math.round(arguments[i] * k) / k + strings[i];
		};
	}
	return cacheAppend;
}
//#endregion
//#region node_modules/d3-geo/src/path/index.js
function path_default(projection, context) {
	let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
	function path(object) {
		if (object) {
			if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
			stream_default(object, projectionStream(contextStream));
		}
		return contextStream.result();
	}
	path.area = function(object) {
		stream_default(object, projectionStream(areaStream));
		return areaStream.result();
	};
	path.measure = function(object) {
		stream_default(object, projectionStream(lengthStream));
		return lengthStream.result();
	};
	path.bounds = function(object) {
		stream_default(object, projectionStream(boundsStream));
		return boundsStream.result();
	};
	path.centroid = function(object) {
		stream_default(object, projectionStream(centroidStream));
		return centroidStream.result();
	};
	path.projection = function(_) {
		if (!arguments.length) return projection;
		projectionStream = _ == null ? (projection = null, identity_default) : (projection = _).stream;
		return path;
	};
	path.context = function(_) {
		if (!arguments.length) return context;
		contextStream = _ == null ? (context = null, new PathString(digits)) : new PathContext(context = _);
		if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
		return path;
	};
	path.pointRadius = function(_) {
		if (!arguments.length) return pointRadius;
		pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
		return path;
	};
	path.digits = function(_) {
		if (!arguments.length) return digits;
		if (_ == null) digits = null;
		else {
			const d = Math.floor(_);
			if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
			digits = d;
		}
		if (context === null) contextStream = new PathString(digits);
		return path;
	};
	return path.projection(projection).digits(digits).context(context);
}
//#endregion
//#region node_modules/d3-geo/src/transform.js
function transform_default(methods) {
	return { stream: transformer(methods) };
}
function transformer(methods) {
	return function(stream) {
		var s = new TransformStream();
		for (var key in methods) s[key] = methods[key];
		s.stream = stream;
		return s;
	};
}
function TransformStream() {}
TransformStream.prototype = {
	constructor: TransformStream,
	point: function(x, y) {
		this.stream.point(x, y);
	},
	sphere: function() {
		this.stream.sphere();
	},
	lineStart: function() {
		this.stream.lineStart();
	},
	lineEnd: function() {
		this.stream.lineEnd();
	},
	polygonStart: function() {
		this.stream.polygonStart();
	},
	polygonEnd: function() {
		this.stream.polygonEnd();
	}
};
//#endregion
export { path_default as n, graticule10 as r, transform_default as t };
