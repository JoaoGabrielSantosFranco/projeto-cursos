"use client";
import styles from 'src/app/page.module.css'
import { useState } from 'react';
import { Task } from './task.js';

export function Tasks({ data }) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);
    const [tasks, setTasks] = useState(data);

    const handlePrevClick = () => {
        if (start > 0) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    const handleNextClick = () => {
        if (end < tasks.length ) {
            setStart(start + 1);
            setEnd(end + 1);
        }
    };

    const taskDone = (a) => {
        setTasks(tasks.filter(tasks => tasks.id != a))
        handlePrevClick();
    };

    return (
        <main>
            <div className={styles.boxContent}>

                <button className={styles.button} onClick={handlePrevClick}>{"<"}</button>

                <ul className={styles.boxContent} >
                    {tasks.slice(start, end ).map((task) => ( //para cada item entre o start e end:
                        <Task task={task} taskDone={taskDone} key={Math.random().toFixed(2) /* task.id */} />
                    ))}
                    {tasks.length === 0 && (
                        <div>
                            <p>Voce não tem mais Tasks Por Hoje</p>
                        </div>
                    )}
                </ul>

                <button className={styles.button} onClick={handleNextClick}>{">"}</button>
            </div>
            <div className={styles.counter}>
                <p>{start + 1}/{tasks.length - 2}</p>
            </div>
        </main>
    );

}