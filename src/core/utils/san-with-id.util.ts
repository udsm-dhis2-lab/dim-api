/**
 * Importing packages from different sources
 */
import * as _ from 'lodash';
import { isArray } from './object.util';
import { uuid } from '@icodebible/utils/uuid';

/**
 *
 * @param option
 * Implement function to add id and its corresponding value by default
 * if the added without supplying those id in Payload
 */
export async function addIdInEntityRelationship(option: {
    [key: string]: any;
}) {
    let obj = _.create();
    if (option) {
        for (const key of await _.keys(option)) {
            if (key && option && isArray(option[key])) {
                obj = {
                    ...obj,
                    [key]: _.map(option[key], (object: any) => {
                        return {
                            ...object,
                            id: uuid('', 11),
                        };
                    }),
                };
            } else {
                obj = { ...obj, [key]: option[key] };
            }
        }
        return obj;
    }
}
