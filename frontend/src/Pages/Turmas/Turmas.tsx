import { Turma } from "@/types";
import { useEffect, useState } from "react";
import { TurmaCard } from './Components/TurmaCard'

export function Turmas() {
  // const [data, setData] = useState<Turma[]>([])

  // useEffect(() => {
  //   fetch('http://localhost:3000/turmas', {
  //     headers: {
  //       authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTUwMzY3IiwiaWF0IjoxNjc4Mzc3MjUyLCJleHAiOjE2Nzg5ODIwNTJ9.LV2O-YDUN5UPB_YQktiESSAzYVUvG2ZMFgo5D_XsYsA'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => setData([...data]))
  // }, [])

  return (
    <>
      <h1>Turmas</h1>
      <TurmaCard nome="1º Série" />
      <TurmaCard nome="1º Série" />
      <TurmaCard nome="1º Série" />
      <TurmaCard nome="1º Série" />
      <TurmaCard nome="1º Série" />
      <TurmaCard nome="1º Série" />

    </>
  )
}