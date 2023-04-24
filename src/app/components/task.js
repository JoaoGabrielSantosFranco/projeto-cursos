import styles from 'src/app/page.module.css'
import { useState } from 'react';
export function Task({ task, taskDone, buttonClicked }) {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <div key={task.id} className={styles.boxContent}>
            <li className={`${styles.content} ${buttonClicked && styles['button-clicked']}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {task.titulo}
                {hover && (
                    <div>
                        <p>Ativa :{task.ativo}</p>
                        <p>Descrição: {task.descricao}</p>
                        <button className={styles.button} onClick={() => taskDone(task)}>{"Feita"}</button>
                    </div>
                )}
            </li>
        </div>
    )
}

