import styles from './NotesInput.module.css';

const NotesInput = () => {
    return (
        <>
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-sm-4">
                    <input type="text" className={`form-control to-do-text notes-input ${styles['notes-input']}`} placeholder='Enter Your To Do Notes Here...' name="" id="" />
                </div>
                <div className="col-sm-2">
                    <input type="date" className={`form-control to-do-text notes-date ${styles['notes-date']}`} placeholder='DD-MM-YYYY' name="" id="" />
                </div>
                <div className="col-sm-2">
                    <div className="btn btn-primary all-button">
                        Add Notes
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotesInput;