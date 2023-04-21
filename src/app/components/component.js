"use client";
import styles from 'src/app/page.module.css'


import { Tasks } from "./tasks"
export function Component({data}) {

    return (
        <main>
            <div>
                <div className={styles.titleDiv}>
                    <p className={styles.title}>Tasks</p>
                </div>   
                
                <Tasks data={data}/>           
            </div>
        </main>
    )
}

