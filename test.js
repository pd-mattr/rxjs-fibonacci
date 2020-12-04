var assert = require('assert');
var fs = require('fs');
var vm = require('vm');

['rx.min.js', 'chai.js', 'fib.js'].forEach(skript =>{
	var data = fs.readFileSync(skript);
	const script = new vm.Script(data);
	script.runInThisContext();
})

tests();
