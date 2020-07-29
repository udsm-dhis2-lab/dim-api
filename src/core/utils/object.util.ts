/**
 *
 * @param prop
 * Check if the prop passed is of type Array
 * Finally it return boolean status which is true
 * Unless it return false. This value is used as
 * Check control.
 */
export function isArray(prop: any): boolean {
    /**
     * We check if Object constructor name is
     * of type array in order to return boolean
     */
    return prop.constructor.name === 'Array'
        ? prop.constructor.name === 'Array'
        : false;
}

/**
 *
 * @param prop
 * Check if the prop passed is of type Object
 * Finally it return boolean status which is true
 * Unless it return false. This value is used as
 * Check control.
 */
export function isObject(prop: any): boolean {
    /**
     * We check if Object constructor name is
     * of type array in order to return boolean
     */
    return prop.constructor.name === 'Object'
        ? prop.constructor.name === 'Object'
        : false;
}
