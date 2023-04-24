"use client";
import styles from 'src/app/page.module.css'
import { useCallback, useState } from 'react';
import { Task } from './task.js';

export function Tasks({ tasks, setTasks, ativo }) {
    const [start, setStart] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(0);
    const localTasks = tasks.filter(task => task.ativo === ativo);

    const handlePrevClick = () => {
        if (start > 0) {
            setStart(start - 3);
        }
    }

    const handleNextClick = () => {
        if (start + 3 < localTasks.length) {
            setStart(start + 3);
        }
    }

    const taskDone = (task) => {

        const data = {
            titulo: task.titulo,
            descricao: task.descricao,
            data: task.data,
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
                    {localTasks.slice(start, start + 3).map((task) => (

                        <Task task={task} taskDone={taskDone} key={`${task.id}-${start}`} buttonClicked={buttonClicked} />

                    ))}
                    {localTasks.length === 0 && (
                        <div>
                            <p> {ativo === 's' ? 'Voce não tem mais Tasks Por Hoje' : 'Nenhuma Task Feita'}</p>
                        </div>
                    )}
                </ul>

                <button className={styles.button} onClick={() => {
                    setButtonClicked(2);
                    handleNextClick();
                    setTimeout(() => setButtonClicked(0), 500);
                }}>{">"}</button>

            </div>
            <div className={styles.counter}>
                <p>{Math.round((start + 2) / 3)}/{Math.round((localTasks.length) / 3)}</p>
            </div>

        </main>
    );

}