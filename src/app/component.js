"use client";
import styles from './page.module.css'
import { useState } from 'react';
export function Component({ data }) {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(2);
    const [hoverId, setHoverId] = useState(null); // Estado para controlar o hover do mouse

    // quando clica faz a lista voltar 1 pra cada bloco
    const handlePrevClick = () => {
        if (start > 0) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    // quando clica faz a lista voltar 1 pra cada bloco
    const handleNextClick = () => {

        if (end < data.length - 1) {
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

    return (
        <main className={styles.background}>
            <div>

                <div className={styles.titleDiv}>
                    <p className={styles.title}>CURSO DE PROGRAMAÇÃO</p>
                </div>

                <div className={styles.boxContent}>

                    <button onClick={handlePrevClick}>volta</button>

                    <ul className={styles.boxContent} >
                        {data.slice(start, end + 1).map((item) => ( //para cada item entre o start e end:

                            <li className={styles.content}
                                key={item.id}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}>

                                {item.titulo}
                                {hoverId === item.id && (// se hover for igual id, ou seja se o mause estiver em cima deste elemento;
                                    <div>
                                        <p>Descrição: {item.descricao}</p>
                                    </div>
                                )}

                            </li>
                        ))}
                    </ul>

                    <button onClick={handleNextClick}>avanca</button>

                </div>
            </div>
        </main>
    )
}

