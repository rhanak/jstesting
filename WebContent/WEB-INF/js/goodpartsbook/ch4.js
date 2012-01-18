Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};

String.method('deentityify', function () {
	var entity = {
			quot: '"',
			lt: '<',
			gt: '>'
	};
	
	return function() {
		return this.replace(/&([^&;]+);/g, function(a,b) {
			var r = entity[b];
			return typeof r === 'string' ? r : a;
		});
	};
}());

Function.method('curry', function() {
	var slice = Array.prototype.slice;
	args = slice.apply(arguments);
	that = this;
	return function() {
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
});