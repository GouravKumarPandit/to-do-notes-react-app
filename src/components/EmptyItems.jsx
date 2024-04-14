import styles from './EmptyItems.module.css';

const EmptyItems = () => {
    return (
        <>
            <p className={`${styles['emptyTodo']}`}>All Tasks Completed, Enjoy Your DAY!!</p>
        </>
    );
}

export default EmptyItems;