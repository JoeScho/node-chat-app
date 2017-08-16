var moment = require('moment');

// Jan 1st 1970 00:00:00

// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// console.log(months[date.getMonth()]);

// var date = moment();
// console.log(date.format('MMM Do, YYYY'));
// date.add(100, 'years');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
console.log(moment(someTimestamp).format('h:mm a'));


var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))
