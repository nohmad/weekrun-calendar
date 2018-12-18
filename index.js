const DAY_NAMES = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const DAY_TIMES = 86400 * 1000

class WeekRunCalendar {

  constructor(epoch = new Date(2017, 0, 1)) {
    this.epoch = epoch
  }

  index(date) {
    return Math.floor((date.getTime() - this.epoch.getTime()) / (7 * DAY_TIMES))
  }

  periodic(date, wrc) {
    const i = this.index(date) % Math.floor(1 / (1 / wrc))
    return wrc == (1 / 2) ? (i + 1) * 5 : Math.pow(2, i)
  }

  nextRecurringDate(date, wday, periodic) {
    const week_index = DAY_NAMES.indexOf(wday)
    const base_date = new Date(new Date(this.sunday(date, periodic)).getTime() + (week_index * DAY_TIMES))
    return new Date(base_date.getTime() + (date < base_date ? 0 : this.interval(periodic)) * DAY_TIMES)
  }

  sunday(date, periodic) {
    return new Date(date.getTime() - (date.getDay() * DAY_TIMES) + ((7 * this.circulate(periodic, this.index(date))) * DAY_TIMES))
  }

  circulate(periodic, index) {
    if (this.biweekly(periodic)) {
      return (index & 1) == 0 ? (periodic >> 2) - 1 : periodic & 1
    } else if ([1, 2, 4, 8].includes(periodic)) {
      return 4 - ((index - Math.log2(periodic)) & 3)
    } else {
      throw new Error("Invalid periodic value!")
    }
  }

  biweekly(periodic) {
    return periodic % 5 == 0
  }

  interval(periodic) {
    if (this.biweekly(periodic)) {
      return 14
    } else if ([1, 2, 4, 8].includes(periodic)) {
      return 28
    } else {
      throw new Error("Invalid periodic value!")
    }
  }
}

module.exports = new WeekRunCalendar()