/**
 *
 */
import * as _ from 'lodash';
/**
 *
 * @param DXs
 * @param PEs
 * @param filterParams
 * @param from
 * @param to
 */
export function findOptionQueryGenerator(
    DXs: string[],
    PEs: string[],
    filterParams: any,
    sourceExchangeDates: Date[],
    from: string,
    to: string,
) {
    /**
     *
     */
    const sourceDataExchangeUids = DXs.length > 0 ? DXs : [];
    const sourceExchangePeriods = PEs.length > 0 ? PEs : [];
    const fqp = filterParams.length > 0 ? filterParams : [];
    const sourceSystemId = from ? from : '';
    const destinationSystemId = to ? to : '';
    const queryOptions = [];
    /**
     *
     */
    for (const sourceDataExchangeUid of sourceDataExchangeUids) {
        /**
         *
         */
        for (const sourceExchangePeriod of sourceExchangePeriods) {
            /**
             *
             */
            for (const sourceExchangeDate of sourceExchangeDates) {
                if (filterParams.length > 0) {
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
                    queryOptions.push({
                        ...createdObj,
                        ...filterConfig,
                        sourceDataElementId: sourceDataExchangeUid,
                        sourceExchangePeriod,
                        sourceExchangeDate,
                        sourceSystemId,
                        destinationSystemId,
                    });
                }
            }
        }
    }
    /**
     *
     */
    return queryOptions;
}
