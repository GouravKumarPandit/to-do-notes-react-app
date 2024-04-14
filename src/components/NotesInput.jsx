import { useState } from 'react';
import styles from './NotesInput.module.css';
import { IoIosAddCircle } from "react-icons/io";

const NotesInput = ({ onAddingHandleToDo }) => {
    let [toDoWork, changeToDoWork] = useState();
    let [toDoDate, changetoDoDate] = useState();

    const addToDoWork = (event) => {
        changeToDoWork(event.target.value)
    }
    const addToDoDate = (event) => {
        changetoDoDate(event.target.value)
    }

    return (
        <>
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-sm-4">
                    <input type="text" className={`form-control to-do-text notes-input ${styles['notes-input']}`} placeholder='Enter Your To Do Notes Here...' value={toDoWork} onChange={addToDoWork} />
                </div>
                <div className="col-sm-2">
                    <input type="date" className={`form-control to-do-text notes-date ${styles['notes-date']}`} placeholder='DD-MM-YYYY' value={toDoDate} onChange={addToDoDate} />
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary all-button" onClick={ () => {
                                if(toDoWork && toDoDate){
                                    onAddingHandleToDo(toDoWork, toDoDate);
                                    changeToDoWork("");
                                    changetoDoDate("");
                                }
                            }
                        }>
                        <IoIosAddCircle /> Add
                    </button>
                </div>
            </div>
        </>
    );
}

export default NotesInput;