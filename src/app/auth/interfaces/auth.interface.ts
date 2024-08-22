export interface TokenLogin {
    refresh: string;
    access_token:  string;
    user_id: number;
    rol:     boolean;
    name:    string;
}

export interface UserLogin {
    email:    string;
    password: string;
}
