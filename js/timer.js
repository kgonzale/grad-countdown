const moment = require('moment');

const now = moment(new Date()); 
const end = moment("2019-05-11"); 

const weeks = end.diff(now, 'week');
const days = end.diff(now, 'days');

const secondsFunction = () => {
    let now = moment(new Date()); 
    let end = moment("2019-05-11");
    return end.diff(now, 'seconds')
}


setInterval(() => {
    const change = secondsFunction();
    document.getElementById("seconds").textContent = Math.floor(change);
  }, 1000);


document.getElementById("days").textContent = Math.round(days);
document.getElementById("weeks").textContent = Math.round(weeks);