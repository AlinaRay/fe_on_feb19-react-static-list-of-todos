import {users} from './users.js';

export default function UserApi() {
    return {
        getAllUsers() {
            return users;
        },
        getUserById(id) {
            let user = users.filter(user => user.id === id);
            return user[0];
        }
    }
}