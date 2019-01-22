import { Post } from './post';
import { Spot } from './spot';

export class User {
    id: number;

    firstName: string;
    lastName: string;
    alias: string;

    posts: Post[];
    following: User[];
    followers: User[];

    favoriteSpots: Spot[];
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}