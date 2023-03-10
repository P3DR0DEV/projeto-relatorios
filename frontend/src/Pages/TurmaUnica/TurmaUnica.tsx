import { Turma } from "@/types"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './TurmaUnica.css'
import { IoIosArrowBack } from "react-icons/io"
import { AlunoList } from "./components/AlunoList"

export function TurmaUnica() {
  const { id } = useParams()

  const [turma, setTurma] = useState<Turma>()

  useEffect(() => {
    fetch(`http://localhost:3000/turmas/${id}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTUwMzY3IiwiaWF0IjoxNjc4Mzc3MjUyLCJleHAiOjE2Nzg5ODIwNTJ9.LV2O-YDUN5UPB_YQktiESSAzYVUvG2ZMFgo5D_XsYsA"
      }
    })
      .then(res => res.json())
      .then(data => setTurma(data))
  }, [])

  return (
    <>
      <div className="turma-unica">
        <div className="turma-unica-nome">
          <Link to={'/turmas'} className="link">
            <IoIosArrowBack />
          </Link>
          <h1 className="nome-turma">{turma?.nome}</h1>
        </div>


        <div>
          <div className="turma-header">
            <div className="turma-header-nome">
              <p>Nome</p>
              <p>Matricula</p>
            </div>
            <p>Relatório</p>
          </div>
          {turma?.Alunos?.map(aluno => {
            return (
              <AlunoList key={aluno.id} aluno={aluno} />
            )
          })}
        </div>
      </div>
    </>
  )
}