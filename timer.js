const moment = require('moment');

const now = moment(new Date()); 
const end = moment("2019-05-11"); 

const weeks = end.diff(now, 'week');
const days = end.diff(now, 'days');
const seconds = end.diff(now, 'seconds');


document.getElementById("days").textContent = Math.floor(days);
document.getElementById("weeks").textContent = Math.floor(weeks);
document.getElementById("seconds").textContent = Math.floor(seconds);