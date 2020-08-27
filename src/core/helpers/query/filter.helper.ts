/**
 *
 */
import * as _ from 'lodash';
/**
 *
 * @param arr
 */
export function filterQueryGenerator(arr: string[]) {
    const mapper = {
        dataSet: 'destinationDataSetId',
    };
    /**
     *
     */
    return _.map(arr, (value: string) => {
        /**
         *
         */
        const temp = _.split(value, ':');
        /**
         *
         */
        return {
            /**
             *
             */
            [mapper[_.head(temp)] ? mapper[_.head(temp)] : _.head(temp)]: _.last(
                temp,
            ),
        };
    });
}

export function labResultQueryGenerator(arr: string[]) {
    /**
     *
     */
    let objQuery = _.create();
    if (arr) {
        for (const item of arr) {
            const q = _.split(item, ':');
            objQuery = { ...objQuery, [_.head(q)]: _.last(q) };
        }
        return [objQuery];
    }
}
