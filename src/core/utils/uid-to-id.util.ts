import * as _ from 'lodash';
import { uuid } from '@icodebible/utils/uuid';
import { isArray, isObject } from './object.util';

export function IDToUIDConverter(object: any) {
    if (object) {
        let obj = _.create();
        for (const pos of _.keys(object)) {
            if (pos && object && isArray(object[pos])) {
                if (object[pos]?.length > 0) {
                    obj = {
                        ...obj,
                        [pos]: _.map(object[pos], (objectValue: any) => {
                            return {
                                ..._.mapKeys(_.omit(objectValue, ['id']), (value, key) => {
                                    return key === 'uid' ? 'id' : key;
                                }),
                            };
                        }),
                    };
                } else {
                    obj = { ...obj, [pos]: object[pos] };
                }
            } else if (pos && object && isObject(object[pos])) {
                obj = {
                    ...obj,
                    [pos]: _.mapKeys(_.omit(object[pos], ['id']), (value, key) => {
                        return key === 'uid' ? 'id' : key;
                    }),
                };
            } else {
                obj = {
                    ...obj,
                    [pos]: object[pos],
                };
            }
        }
        return obj;
    }
}
