import * as _ from 'lodash';
/**
 *
 * @param data
 */
export function dataElementsQueryGenerator(dataElements: any): string[] {
    /**
     *
     */
    return dataElements ? _.split(dataElements, ';') : [];
}
