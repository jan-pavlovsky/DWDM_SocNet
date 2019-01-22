import { Spot } from './spot';
import { User } from './user';

export class Post {
    id: number;

    name: string;
    content: string;
    spot: Spot;
    poster: User;
    visibility: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
