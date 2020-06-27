import * as _ from 'lodash';
/**
 *
 * @param data
 */
export function dxQueryGenerator(dx: any): string[] {
    /**
     *
     */
    return dx ? _.split(dx, ';') : [];
}
