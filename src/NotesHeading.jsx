import styles from './NotesHeading.module.css';

const NotesHeading = () => {
    return (
        <>
            {/* <h3 className='text-center py-4 text-danger fw-bold '>To Do Notes React App</h3> */}
            <h3 className={`${styles["to-do-heading"]} text-center py-4 text-danger fw-bold`}>To Do Notes React App</h3>
        </>
    );
}

export default NotesHeading;