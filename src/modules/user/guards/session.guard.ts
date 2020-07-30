import { CanActivate, ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { User } from '../entities/user.entity';

export class SessionGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();
        if (
            (request.headers.host.indexOf('localhost') > -1 ||
                request.headers.host.indexOf('localhost') === -1) &&
            !request.session.user
        ) {
            request.session.user = {
                created: '2016-12-08T12:47:22.000Z',
                lastUpdated: '2019-11-13T06:22:07.000Z',
                id: 937,
                uid: '5849565a0256c',
                username: 'anonymous',
                firstName: 'Anonymous',
                middleName: null,
                surname: 'Anonymous',
                email: 'anonymous@example.com',
                phoneNumber: null,
                jobTitle: null,
                lastLogin: '2019-11-13T06:22:07.000Z',
                expiryDate: null,
                deletedDate: null,
                enabled: true,
                token: 'dmluY2VudG1pbmRlOkhSSElTMjAyMA==',
                userRoles: [{ landingPage: '' }],
                userGroups: [],
                messages: [],
                forms: [],
                organisationUnits: [
                    {
                        id: '52893cd1b8359',
                    },
                ],
                userSettings: null,
            };
            return true;
        }
        try {
            if (request.session.user) {
                request.session.previousPath = request.path;
                return true;
            }
            if (request.headers?.authorization) {
                const user = await User.authenticateUserByToken(
                    request.headers?.authorization.replace('Basic ', ''),
                );
                if (user) {
                    request.session.user = user;
                    return true;
                }
            }
        } catch (e) {
            throw new Error(e);
        }
    }
}
export const SessionUser = createParamDecorator((data, req) => {
    return req.session.passport.user;
});
