import styles from 'src/app/page.module.css'
import { useState } from 'react';
export function Task({ task, taskDone, }) {

    const [hover,setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    console.log(task.id)

    return (
        <div  className={styles.boxContentIndividual}>
            <li className={styles.content}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {task.titulo}
                {hover && (
                    <div>
                        <p>{task.id}</p>
                        <p>Descrição: {task.descricao}</p>
                        <button className={styles.button} onClick={() => taskDone(task.id)}>{"Feita"}</button>
                    </div>
                )}
            </li>
        </div>
    )
}