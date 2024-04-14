import styles from './NotesItem.module.css';

const NotesItem = () => {
    return (
        <>
            <div className="row justify-content-center align-items-center my-4">
                <div className={`${styles['notes-data']} col-sm-4 rounded me-3`}>
                    <p className='my-2'>We will go to the GYM</p>
                </div>
                <div className={`col-sm-2 rounded ${styles['notes-data']}`}>
                    <p className='my-2'>09-04-2024</p>
                </div>
                <div className="col-sm-2">
                    <div className="btn btn-danger all-button">Delete</div>
                </div>
            </div>
        </>
    );
}

export default NotesItem;