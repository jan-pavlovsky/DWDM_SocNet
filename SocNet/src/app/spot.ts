import { User } from './user';

export class Spot {
    id: number;

    name: string;
    location: string;

    poster: User;
    interested: User[];
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
