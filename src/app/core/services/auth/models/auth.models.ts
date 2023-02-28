export interface IUser {
    _id?: string,
    email: string,
    password: string |null,
    firstName: string,
    lastName?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: string
}

export interface IUserSignInResponse {
    user: IUser,
    token: string
}