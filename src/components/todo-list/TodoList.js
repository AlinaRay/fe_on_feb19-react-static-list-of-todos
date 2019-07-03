import React from 'react'
import TodoItem from '../todo-item/TodoItem';

export default function TodoList(props) {
    let data = props.todos;
    let elements = data.map((item) => {
        let user = props.getUserById(item.userId);
        return (
            <TodoItem
                key={item.id}
                completed={item.completed}
                id={item.id}
                text={item.title}
                user={user}
            />
        )
    });
    return (
        <table>
            <thead>
            <tr>
                <th>Status</th>
                <th>Task</th>
                <th>User</th>
            </tr>
            </thead>
            <tbody>{elements}</tbody>
        </table>)
}