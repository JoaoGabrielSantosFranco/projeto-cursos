"use client";
import styles from 'src/app/page.module.css'
import { useState } from 'react';

import { Tasks } from "./tasks"
export function Component({ data }) {

    const [buttonClicked, setButtonClicked] = useState(true);
    const [tasks, setTasks] = useState(data);
    // const data1 = data.filter(ativo => ativo.ativo == 'n');
    // const data2 = data.filter(ativo => ativo.ativo == 's');


    function clicked() {
        if (buttonClicked == true) {
            console.log("Verdadeiro")
            setButtonClicked(false);
        }
        if (buttonClicked !== true) {
            setButtonClicked(true);
        }
    }



    return (
        <main>
            {buttonClicked && (
                <div>
                    <div className={styles.titleDiv}>
                        <div className={styles.box}>
                            <button className={styles.buttonThisPage} >{'Fazer'}</button>
                            <button className={styles.buttonNotThisPage} onClick={() => setButtonClicked(false)}>{'Feitas'}</button>
                        </div>

                        <p>Tasks</p>
                    </div>
                    <Tasks tasks={tasks} setTasks={setTasks} ativo='s' />
                </div>
            )
            }

            {
                !buttonClicked && (
                    <div>
                        <div className={styles.titleDiv}>
                            <div className={styles.box}>
                                <button className={styles.buttonNotThisPage} onClick={() => setButtonClicked(true)}>{'Fazer'}</button>
                                <button className={styles.buttonThisPage}>{'Feitas'}</button>
                            </div>
                            <p>Tasks</p>
                        </div>
                        <Tasks tasks={tasks} setTasks={setTasks} ativo='n' />
                    </div>
                )
            }
        </main >
    )
}

