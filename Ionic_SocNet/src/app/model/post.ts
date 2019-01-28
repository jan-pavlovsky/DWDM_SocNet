import { User } from './user';

export class Post {
    id: string;

    user: User;
    content: string;
    created: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
