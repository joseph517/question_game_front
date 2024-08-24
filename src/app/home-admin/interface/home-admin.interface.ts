export interface User {
    id?:        number;
    name:      string;
    email:     string;
    password:  string;
    // is_active: boolean;
    // is_staff:  boolean;
}

export interface Game {
    id?:          number;
    name_game:   string;
    description: string;
}
