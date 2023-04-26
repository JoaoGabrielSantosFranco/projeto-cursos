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
            <div style={{ backgroundColor: task.ativo === 's' ? '#556B2F' : '#495057' }} className={`${styles.content} ${buttonClicked && styles['button-clicked']}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {task.titulo}
                {hover && (
                    <div >
                        <p>id :{task.id}</p>
                        <p>Descrição: {task.descricao}</p>
                        <button style={{ backgroundColor: task.ativo === 's' ? '#556B2F' : '#495057' }} 
                        className={styles.button} onClick={() => taskDone(task)}>{task.ativo === 's' ? "Feita" : 'Não Feita'}</button>
                    </div>
                )}
            </div>
        </div >
    )
}

