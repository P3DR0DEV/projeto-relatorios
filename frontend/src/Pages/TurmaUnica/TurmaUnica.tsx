import { Turma } from "@/types"
import { useEffect, useRef, useState, MouseEvent } from "react"
import { Link, useParams } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { AlunoList } from "./components/AlunoList"
import { AiOutlinePlus } from "react-icons/ai"
import { CriaAluno } from "./components/CriaAluno"
import './TurmaUnica.css'

export function TurmaUnica() {
  const { id } = useParams()
  const [turma, setTurma] = useState<Turma>()
  const dialog = useRef<HTMLDialogElement>(null)

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

  function toggleCreateNewClass(e: MouseEvent<HTMLButtonElement>) {
    dialog.current?.showModal();
  }

  return (
    <>
      <div className="turma-unica">
        <div className="turma-unica-header">

          <div className="turma-unica-nome">
            <Link to={'/turmas'} className="link">
              <IoIosArrowBack />
            </Link>
            <h1 className="nome-turma">{turma?.nome}</h1>
          </div>

          <button className="button-create-aluno" onClick={toggleCreateNewClass}>
            Cadastrar Aluno
            <AiOutlinePlus fontSize={"1.25rem"} />
          </button>
        </div>

        <CriaAluno dialog={dialog} turmaId={Number(id)} />

        <div>
          <div className="turma-header">
            <div className="turma-header-nome">
              <p>Nome</p>
              <p>Matricula</p>
            </div>
            <p>Relatório</p>
          </div>
          {turma?.Alunos?.map(aluno => {
            console.log(aluno.id)
            return (
              <AlunoList key={aluno.id} aluno={aluno} />
            )
          })}
        </div>
      </div>
    </>
  )
}