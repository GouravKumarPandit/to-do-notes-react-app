import NotesItems from './components/NotesItems';
import NotesInput from './components/NotesInput';
import NotesHeading from './components/NotesHeading';
import { useState } from 'react';

import './App.css';

function App() {

	let [allNotes, notesChangeState] = useState([]);

	const onAddingHandleToDo = (toDoWork, toDoDate) => {
		let newToDo = {
			"to_do" : toDoWork,
			"to_do_date" : toDoDate,
		}
		let tempToDoWork = [...allNotes, newToDo];
		notesChangeState(tempToDoWork);
	}

	const deleteTodo = (toDoNotes, toDoDate) => {
		let tempToDoWork = [...allNotes];
		let newToDoItmes = tempToDoWork.filter( (toDoObj) => toDoObj['to_do'] !== toDoNotes && toDoObj['to_do_date'] !== toDoDate )
		notesChangeState(newToDoItmes)
	}

	return (
		<div className="app vw-100 vh-100">
			<NotesHeading></NotesHeading>
			<NotesInput onAddingHandleToDo={onAddingHandleToDo}></NotesInput>
			<NotesItems allNotes={allNotes} deleteTodo={deleteTodo}></NotesItems>
		</div>
	);
}

export default App;
