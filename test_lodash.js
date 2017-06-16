"use strict";

let _ = require('lodash');

let arr = [1,2,3,4,5,6];
let new_arr = _.map(arr, item=>item*2);
console.log(new_arr);

