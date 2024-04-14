import styles from './EmptyItems.module.css';

const EmptyItems = () => {
    return (
        <>
            <p className={`${styles['emptyTodo']}`}>Stay organized and manage your day-to-day with To Do App!!</p>
        </>
    );
}

export default EmptyItems;