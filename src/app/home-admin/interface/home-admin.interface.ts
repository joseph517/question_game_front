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

export interface Ranking {
    user__name: string;
    score:      number;
}


export interface Question {
    id:       number;
    options:  Option[];
    game:     Game;
    question: string;
    score:    number;
}

export interface QuestionCreate {
    // id: number;
    question: string;
    game: number;
    score: number;
}


export interface Option {
    id?:         number;
    option:      string;
    is_correct:  boolean;
    question: number;
}

export interface AssignGameToUser {
    user_id:  number;
    game_id:  number;
    // score: number;
}

export interface ListGameByUser{
    id: number;
    name_game: string;
}
