import * as _ from 'lodash';
/**
 *
 * @param periods
 */
export function periodQueryGenerator(periods: any): string[] {
    /**
     *
     */
    return periods ? _.split(periods, ';') : [];
}
