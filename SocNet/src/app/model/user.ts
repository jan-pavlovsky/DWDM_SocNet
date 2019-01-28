import { Post } from './post';

export class User {
    id: string;

    firstName: string;
    lastName: string;
    alias: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}