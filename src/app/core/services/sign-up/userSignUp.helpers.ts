//Este archivo va a tener funciones que se van a exportar con funcionalidades rehutilizables

import { IApiUserSignUp } from "./api/models/api-sign-up.models";

export function transformUser(userEl: IApiUserSignUp): IApiUserSignUp {
    delete userEl.createdAt && userEl.updatedAt && userEl.__v;
    return {
        ...userEl
};
}