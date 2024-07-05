export interface user {
    id?:string;
    username:string;
    firstName:string;
    lastName:string;
    email:string;
    address?:string;
    password:string;
    role: 'admin' | 'user';   
}
