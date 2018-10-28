"use strict";

const util =  {
	acc : []
};

const make = (...args) => {
	if (typeof args[0] === "number") {
		util.acc = util.acc.concat(args);
	}  else return	util.acc.reduce((sum, elem) => sum + elem);
};
