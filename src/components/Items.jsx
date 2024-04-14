import styles from './Itmes.module.css';
import { MdDelete } from "react-icons/md";

const Items = ({ toDoNotes, toDoDate, deleteTodo }) => {
    return (
        <>
            <div className={`${styles['notes-data']} col-sm-4 rounded me-3 my-2`}>
                <p className='my-2'>{toDoNotes}</p>
            </div>
            <div className={`col-sm-2 rounded ${styles['notes-data']}`}>
                <p className='my-2 text-center'>{toDoDate}</p>
            </div>
            <div className="col-sm-2">
                <div className="btn btn-danger all-button" onClick={ () => deleteTodo(toDoNotes, toDoDate) }><MdDelete /> Delete</div>
            </div>
        </>
    )
}

export default Items;