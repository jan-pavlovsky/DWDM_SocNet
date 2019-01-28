import { User } from './user';

export class Post {
    id: string;

    name: string;
    content: string;
    created: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
