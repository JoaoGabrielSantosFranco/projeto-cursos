"use client";
import styles from 'src/app/page.module.css';
import { useState } from 'react';
import { Tasks } from "./tasks";
import Switch from 'react-switch';

export function Component({ data }) {

    const [buttonClicked, setButtonClicked] = useState(true);
    const [tasks, setTasks] = useState(data);

    return (
        <main>

            <div className={styles.screen} >
                <div className={styles.titleDiv}>
                    <div className={styles.switchContainer}>
                        <p>Feitas</p>
                        <Switch onColor={'#556B2F'} offColor={'#495057'} checkedIcon={null} uncheckedIcon={null} onChange={() => setButtonClicked(!buttonClicked)} checked={buttonClicked} />
                        <p>A Fazer</p>
                    </div>

                    <p>Tasks</p>
                </div>
                {buttonClicked ?
                    <Tasks key='s' tasks={tasks} setTasks={setTasks} ativo='s' /> : <Tasks key='n' tasks={tasks} setTasks={setTasks} ativo='n' />}
            </div>

        </main >
    )
}

