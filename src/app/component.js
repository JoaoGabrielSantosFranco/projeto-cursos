"use client";
import styles from './page.module.css'

import { Tasks } from "./tasks"
export function Component({data}) {

    return (
        <main className={styles.background}>
            <div>
                <div className={styles.titleDiv}>
                    <p className={styles.title}>Tasks</p>
                </div>   
                
                <Tasks data={data}/>           
            </div>
        </main>
    )
}

