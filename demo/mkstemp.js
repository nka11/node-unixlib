var unixlib = require("../build/Release/unixlib.node");
var goodstrtemplate = "/tmp/mkstempXXXXXX";
var badstrtemplate = "/tmp/mkstempXXX";

// Let's try mkstemp-ing 
unixlib.mkstemp(goodstrtemplate, function(result, fd, filename) {

	console.log(result);
	console.log(fd);
	console.log(filename);

});

// Let's try mkstemp-ing 
unixlib.mkstemp(badstrtemplate, function(result, fd, filename) {

	console.log(result);
	console.log(fd);
	console.log(filename);

});
