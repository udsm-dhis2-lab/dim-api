/**
 *
 * @param username
 * @param password
 */
export function getBasicAuthanticationString(username, password) {
    /**
     *
     */
    return Buffer.from(`${username}:${password}`).toString('base64');
}
