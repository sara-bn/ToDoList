import React from 'react';
interface ToDoProps {
	item: {
		id: string;
		description: string;
		priority: number;
	}[];
}
const TodoList: React.FC<ToDoProps> = (props) => {
	return (
		<ul>
			{props.item.map((todo) => (
				<li key={todo.id}>
					{todo.description} | {todo.priority}
				</li>
			))}
		</ul>
	);
};

export default TodoList;
