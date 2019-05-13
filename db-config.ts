export class User {
    static get table() {
        return 'USER';
    }

    static get column() {
        return {
            userId: 'user_id',
            userName: 'user_name',
            userPassword: 'user_password',

        };
    }
}