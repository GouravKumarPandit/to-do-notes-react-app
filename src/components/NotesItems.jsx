import Items from './Items'
// import styles from './NotesItem.module.css';

// const NotesItem = (props) => {
// or
const NotesItem = ( { allNotes } ) => {
    return (
        <>
            <div className="row justify-content-center align-items-center my-4">
                {allNotes.map( (toDoObj) => {
                    return <Items toDoNotes={toDoObj['to_do']} toDoDate={toDoObj['to_do_date']}></Items>
                } )}
            </div>
        </>
    );
}

export default NotesItem;