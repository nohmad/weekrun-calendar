## WeekRunCalendar
Library for calendar events recurring by 2 or 4 week period

## Epoch
Jan. 1, 2017 was Sunday, which is a good starting point to create a calendar system runs by week.

## Periodic
| Decimal | Binary | |
| ------- | ------ | ---- |
| 5       | 0101   | Each odd week starts from the epoch |
| 10      | 1010   | Each even week starts from the epoch |
| 1       | 0001   | 1st, 5th, 9th week and so on |
| 2       | 0010   | 2nd, 6th, 10th week and so on |
| 4       | 0100   | 3rd, 7th, 11th week and so on |
| 8       | 1000   | 4th, 8th, 12th week and so on |

## Usage
```
> const cal = require('weekrun-calendar')
undefined
> cal.nextRecurringDate(new Date(2017, 0, 1), 'sun', 5).toDateString()
'Sun Jan 01 2017'
> cal.nextRecurringDate(new Date(2017, 0, 2), 'sun', 5).toDateString()
'Sun Jan 15 2017'
> cal.nextRecurringDate(new Date(2017, 0, 1), 'sun', 10).toDateString()
'Sun Jan 08 2017'
```
