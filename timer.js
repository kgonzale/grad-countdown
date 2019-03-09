const moment = require('moment');

document.getElementById("countdown").textContent= moment("20190511", "YYYYMMDD").fromNow();

var a = moment([2007, 05, 11]);
var b = moment([2007, 05, 23]);
c = a.diff(b, 'days')

console.log(c)