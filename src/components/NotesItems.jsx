import Items from './Items'
import EmptyItems from './EmptyItems';
// import styles from './NotesItem.module.css';

// const NotesItem = (props) => {
// or
const NotesItem = ( { allNotes, deleteTodo } ) => {
    return (
        <>
            <div className="row justify-content-center align-items-center my-4">
                {allNotes.length ? 
                    allNotes.map( (toDoObj) => {
                        return <Items 
                            toDoNotes={toDoObj['to_do']} 
                            toDoDate={toDoObj['to_do_date']} 
                            deleteTodo={deleteTodo}
                        ></Items>
                    } )
                    : <EmptyItems></EmptyItems>
                 }
            </div>
        </>
    );
}

export default NotesItem;