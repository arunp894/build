export class Login{
    static readonly type = 'Login Auth';
    constructor(public payload : any){}
}
export class Logout{
    static readonly type = 'Logout Auth';
    constructor(){}
}
export class RefereshToken{
    static readonly type = 'Get new Token'
    constructor(){}
}