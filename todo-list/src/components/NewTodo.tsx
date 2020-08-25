import React, { useRef, useState } from 'react';

type NewTodoProps = {
	onAddTodo: (todoText: string, todoPriority: number) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const [errorMessage, setErrorMessage] = useState<string>();
	const textInputRef = useRef<HTMLInputElement>(null);
	const priorityInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		const enteredPeriority = Number(priorityInputRef.current!.value);
		if (!enteredText) {
			setErrorMessage('Please Enter Description');
		} else if (Number.isNaN(enteredPeriority)) {
			setErrorMessage('Please Enter a Number for Priority');
		} else {
			props.onAddTodo(enteredText, enteredPeriority);
		}
	};

	return (
		<div>
			<form onSubmit={todoSubmitHandler}>
				<div>
					<input type="text" id="todo-text" ref={textInputRef} placeholder="Description" />
					<input type="text" id="todo-priority" ref={priorityInputRef} placeholder="Priority" />
				</div>
				<button type="submit">Add Todo</button>
			</form>
			<div className="error">{errorMessage}</div>
		</div>
	);
};

export default NewTodo;
