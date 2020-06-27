import * as _ from 'lodash';

export function getDateRange(startDate: Date, endDate: Date) {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (days) {
        const date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return _.map(dates, (date: Date) => this.getFormattedDate(date));
}

/**
 * Final formatted date YYYY-MM-DD
 */
export function getFormattedDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}
