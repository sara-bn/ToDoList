import React from 'react';
interface ToDoProps {
	item: {
		id: string;
		description: string;
		priority: number;
	}[];
	onDeleteTodo: (id: string) => void;
}
const TodoList: React.FC<ToDoProps> = (props) => {
	return (
		<ul>
			{props.item.map((todo) => (
				<li key={todo.id}>
					{todo.description} | {todo.priority}
					<button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
