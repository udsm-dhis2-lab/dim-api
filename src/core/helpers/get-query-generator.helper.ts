/**
 *
 */
import * as _ from 'lodash';
/**
 *
 * @param dataElements
 * @param periods
 * @param filterQueryParams
 * @param from
 * @param to
 */
export function findOptionQueryGenerator(
    dataElements: string[],
    periods: string[],
    filterQueryParams: any,
    from: string,
    to: string,
) {
    /**
     *
     */
    const de = dataElements.length > 0 ? dataElements : [];
    const pe = periods.length > 0 ? periods : [];
    const fqp = filterQueryParams.length > 0 ? filterQueryParams : [];
    const fromSystem = from ? from : '';
    const toSystem = to ? to : '';
    const findOptions = [];
    /**
     *
     */
    for (const dataElement of de) {
        /**
         *
         */
        for (const period of pe) {
            /**
             *
             */
            if (filterQueryParams.length === 2) {
                /**
                 *
                 */
                const createdObj = _.create();
                /**
                 *
                 */
                const filterConfig = _.reduce(fqp, _.extend);
                /**
                 *
                 */
                findOptions.push({
                    ...createdObj,
                    ...filterConfig,
                    uid: dataElement,
                    period,
                    from: fromSystem,
                    to: toSystem,
                });
            }
        }
    }
    /**
     *
     */
    return findOptions;
}
