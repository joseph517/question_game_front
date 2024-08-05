export interface GameList {
    id: number;
    name_game: string;
    description: string;
    users: number[];
}

export interface QuestionList {
    id:       number;
    options:  Option[];
    question: string;
    score:    number;
    game:     number;
}

export interface Option {
    id:         number;
    option:     string;
    is_correct: boolean;
    question:   number;
}

export interface RankingList {
    user__name: string;
    score:      number;
}
export interface Validate {
    message: string;
}
