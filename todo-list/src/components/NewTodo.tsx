import React, { useRef } from 'react';

type NewTodoProps = {
	onAddTodo: (todoText: string, todoPriority: number) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);
	const priorityInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		const enteredPeriority = Number(priorityInputRef.current!.value);
		props.onAddTodo(enteredText, enteredPeriority);
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div className="form-control">
				<label htmlFor="todo-text">Todo Text</label>
				<input type="text" id="todo-text" ref={textInputRef} />
				<input type="text" id="todo-priority" ref={priorityInputRef} />
			</div>
			<button type="submit">ADD TODO</button>
		</form>
	);
};

export default NewTodo;
