import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './Todo.model';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const todoAddHandler = (text: string) => {
		setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), description: text, priority: 1 }]);
	};

	return (
		<div className="App">
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList item={todos} />
		</div>
	);
};

export default App;
