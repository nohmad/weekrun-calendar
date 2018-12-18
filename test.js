const cal = require('./src/index')

console.log(cal.nextRecurringDate(new Date(2017, 0, 1, 11), 'sun',  5).toDateString() == new Date(2017, 0, 15).toDateString())
console.log(cal.nextRecurringDate(new Date(2017, 0, 1, 11), 'sun', 10).toDateString() == new Date(2017, 0, 8).toDateString())
console.log(cal.nextRecurringDate(new Date(2017, 0, 1, 11), 'mon',  5).toDateString() == new Date(2017, 0, 2).toDateString())
console.log(cal.nextRecurringDate(new Date(2017, 0, 1, 11), 'mon', 10).toDateString() == new Date(2017, 0, 9).toDateString())

console.log(cal.nextRecurringDate(new Date(2017, 0, 10, 11), 'mon',  5).toDateString() == new Date(2017, 0, 16).toDateString())
console.log(cal.nextRecurringDate(new Date(2017, 0, 10, 11), 'mon', 10).toDateString() == new Date(2017, 0, 23).toDateString())
console.log(cal.nextRecurringDate(new Date(2017, 0, 10, 11), 'fri',  5).toDateString() == new Date(2017, 0, 20).toDateString())
console.log(cal.nextRecurringDate(new Date(2017, 0, 10, 11), 'fri', 10).toDateString() == new Date(2017, 0, 13).toDateString())
