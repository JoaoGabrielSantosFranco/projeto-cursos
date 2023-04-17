import Image from 'next/image'

import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })

async function chamada() {
  const APIBase = 'http://localhost/crud-php/vagas/list.php'

  const response = await fetch(APIBase, { cache: 'reload' })
  const data = await response.json()

  console.log(data)

  return data
}






export default async function Home() {
  const data = await chamada()

  return (
    <main className={styles.background}>
      <div >
        <div className={styles.titleDiv}>
          <p className={styles.title}>CURSO DE PROGRAMAÇÃO</p>
        </div>

        <div className={styles.boxContent}>
          <button>volta</button>
          <ul className={styles.content}></ul>
          <ul className={styles.content}></ul>
          <ul className={styles.content}></ul>
          <button>avanca</button>
        </div>


        <div>
          {/* <ul className={styles.boxContent}>
            {data.map((item, index) => (
              <li className={styles.content} key={index}>
                <p>ID: {item.id}</p>
                <p>titulo: {item.titulo}</p>
                <p>Descrição: {item.descricao}</p>
                <p>ativo: {item.ativo}</p>
                <p>data: {item.data}</p>
              </li>
            ))}
          </ul> */}
        </div>

        {/* {data.map(_ => JSON.stringify(_))} */}
      </div>
    </main>


  )
}




