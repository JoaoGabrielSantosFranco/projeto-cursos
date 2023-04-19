"use client";
import styles from './page.module.css'
import { useState } from 'react';

export function Tasks({data}) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(2);
    const [hoverId, setHoverId] = useState(null); // Estado para controlar o hover do mouse
    const [tasks, setTasks] = useState(data);

    // quando clica faz a lista voltar 1 pra cada bloco
    const handlePrevClick = () => {
        if (start > 0) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    // quando clica faz a lista voltar 1 pra cada bloco
    const handleNextClick = () => {
        if (end < tasks.length - 1) {
            setStart(start + 1);
            setEnd(end + 1);
        }
    };

    // quando o mause passa por cima Atualiza o ID do hover
    const handleMouseEnter = (id) => {
        setHoverId(id);
    };

    // quando o mause passa por cima remove o ID do hover
    const handleMouseLeave = () => {
        setHoverId(null);
    };

    const task_done = (a) => {
        console.log(tasks)
        console.log(tasks[0].id === a)

        setTasks(tasks.filter(tasks => tasks.id != a))
        handlePrevClick();
    };

    return (
        <main>
            <div className={styles.boxContent}>

                <button className={styles.button} onClick={handlePrevClick}>{"<"}</button>

                <ul className={styles.boxContent} >
                    {tasks.slice(start, end + 1).map((item) => ( //para cada item entre o start e end:
                        <div className={styles.boxContentIndividual}>
                            <li className={styles.content}
                                key={item.id}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}>

                                {item.titulo}
                                {hoverId === item.id && (// se hover for igual id, ou seja se o mause estiver em cima deste elemento;
                                    <div>
                                        <p>{item.id}</p>
                                        <p>Descrição: {item.descricao}</p>
                                        <button className={styles.button} onClick={() => task_done(item.id)}>{"Feita"}</button>
                                    </div>
                                )}
                            </li>
                        </div>
                    ))}
                    {tasks.length == 0 && (
                        <div>
                            <p>Voce não tem mais Tasks Por Hoje</p>
                        </div>
                    )}
                </ul>
                <button className={styles.button} onClick={handleNextClick}>{">"}</button>
            </div>
            <div className={styles.counter}>
                <p>{end - 1}/{tasks.length - 2}</p>
            </div>
        </main>
    );

}