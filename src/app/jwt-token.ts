export interface JwtToken {
    code: number,
    token: string,
    user: {
        name: string,
        email: string
    }
}
