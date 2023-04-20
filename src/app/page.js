import { Component } from "./components/component"
async function chamada() {
  const APIBase = 'http://localhost/crud-php/vagas/list.php'
  const response = await fetch(APIBase, { cache: 'no-cache' })
  const data = await response.json()
  return data
}

export default async function Home() {
  const data = await chamada()

  return <Component data={data} /> 

}




