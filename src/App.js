import React from 'react';
import TodoApi from './components/util/TodoApi';
import TodoList from './components/todo-list/TodoList';
import UserApi from './components/util/UserApi';

export default class App extends React.Component {

    constructor() {
        super();
        this.todoApi = new TodoApi();
        this.userApi = new UserApi();
        this.state = {
            todoData: this.todoApi.getAllTodos(),
            usersData: this.userApi.getAllUsers(),
        };
    }

    render() {
        return (
            <div>
                <TodoList
                    todos={this.state.todoData}
                    getUserById={this.userApi.getUserById}
                />
            </div>
        );
    }
}

