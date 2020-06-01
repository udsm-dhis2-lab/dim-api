/**
 *
 */
import * as _ from 'lodash';
/**
 *
 * @param arr
 */
export function filterQueryParamGenerator(arr: string[]) {
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
            [_.head(temp)]: _.last(temp),
        };
    });
}
