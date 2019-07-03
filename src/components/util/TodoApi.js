import {todos} from './todo.js'

export default function TodoApi() {
    return {
        getAllTodos() {
            return todos;
        }
    }
}