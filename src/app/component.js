"use client";
import styles from './page.module.css'
import { useState } from 'react';
export function Component({ data }) {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(2);

    const handlePrevClick = () => {
        if (start > 0) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    const handleNextClick = () => {
        console.log(data.length);
        console.log(end);
        if (end < data.length - 1) {
            setStart(start + 1);
            setEnd(end + 1);
        }

    };
    return (
        <main className={styles.background}>
            {data.map(_ => JSON.stringify(_))}
            <div >
                <div className={styles.titleDiv}>
                    <p className={styles.title}>CURSO DE PROGRAMAÇÃO</p>
                </div>

                <div className={styles.boxContent}>
                    <button onClick={handlePrevClick}>volta</button>
                    <ul className={styles.content}>{data[start].titulo}</ul>
                    <ul className={styles.content}>{data[end - 1].titulo}</ul>
                    <ul className={styles.content}>{data[end].titulo}</ul>
                    <button onClick={handleNextClick}>avanca</button>
                </div>
            </div>
        </main>


    )
}
