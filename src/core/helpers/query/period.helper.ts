import * as _ from 'lodash';
/**
 *
 * @param pe
 */
export function peQueryGenerator(pe: any): string[] {
    /**
     *
     */
    return pe ? _.split(pe, ';') : [];
}
