"use client";
import styles from 'src/app/page.module.css'
import { useState } from 'react';

import { Tasks } from "./tasks"
export function Component({ data }) {

    const [buttonClicked, setButtonClicked] = useState(true);
    const [data1, setData1] = useState(data.filter(ativo => ativo.ativo == 'n'));
    const [data2, setData2] = useState(data.filter(ativo => ativo.ativo == 's'));

//ativas 
//não ativas

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
            <button onClick={() => clicked()}>CLickMe</button>
            {buttonClicked && (
                <div>
                    <div className={styles.titleDiv}>
                        <p>Tasks</p>
                    </div>
                    <Tasks data={data2} />
                </div>
            )}


            {!buttonClicked && (
                <div>
                    <div className={styles.titleDiv}>
                        <p>Tasks</p>
                    </div>
                    <Tasks data={data1} />
                </div>
            )}

        </main>
    )
}

