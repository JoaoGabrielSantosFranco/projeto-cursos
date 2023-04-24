"use client";
import styles from 'src/app/page.module.css'
import { useCallback, useState } from 'react';
import { Task } from './task.js';

export function Tasks({ data }) {
    const [start, setStart] = useState(0);
    const [tasks, setTasks] = useState(data);
    const [buttonClicked, setButtonClicked] = useState(0);


    const handlePrevClick = () => {
        if (start > 0) {
            setStart(start - 1);
        }
    }

    const handleNextClick = () => {
        if (start + 3 < tasks.length) {
            setStart(start + 1);
        }
    }

    const taskDone = (task) => {

        const data = {
            id: task.id,
            ativo: task.ativo === "s" ? 'n' : 's', 
        };

        fetch('http://localhost/crud-php/vagas/dataInput.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(async response => {
                if (!response.ok) {
                    throw new Error('Erro ao atualizar os dados no servidor');
                }
                console.log(await response.text());
            })

        const newTasks = [...tasks.filter(tasks => tasks.id != task.id), data]
        setTasks(newTasks)
        handlePrevClick();
    }

    return (
        <main>
            <div className={styles.box}>


                <button className={styles.button} onClick={() => {
                    setButtonClicked(1);
                    handlePrevClick();
                    setTimeout(() => setButtonClicked(0), 500);
                }}>{"<"}</button>

                <ul className={styles.box} >
                    {tasks.slice(start, start + 3).map((task) => (

                        <Task task={task} taskDone={taskDone} key={`${task.id}-${start}`} buttonClicked={buttonClicked} />

                    ))}
                    {tasks.length === 0 && (
                        <div>
                            <p >Voce não tem mais Tasks Por Hoje</p>
                        </div>
                    )}
                </ul>

                <button className={styles.button} onClick={() => {
                    setButtonClicked(2);
                    handleNextClick();
                    setTimeout(() => setButtonClicked(0), 500);
                }}>{">"}</button>

            </div>
            {tasks.length > 3 && (
                <div className={styles.counter}>
                    <p>{start + 1}/{tasks.length - 2}</p>
                </div>
            )}

        </main>
    );

}