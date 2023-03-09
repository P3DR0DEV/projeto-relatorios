import { Turma } from "@/types";
import { useEffect, useState, MouseEvent } from "react";
import { TurmaCard } from './Components/TurmaCard'
import './Turmas.css'
import { AiOutlinePlus } from 'react-icons/ai'
export function Turmas() {

  const [newClass, SetNewClass] = useState(false)
  const [data, setData] = useState<Turma[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/turmas', {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTUwMzY3IiwiaWF0IjoxNjc4Mzc3MjUyLCJleHAiOjE2Nzg5ODIwNTJ9.LV2O-YDUN5UPB_YQktiESSAzYVUvG2ZMFgo5D_XsYsA'
      }
    })
      .then(response => response.json())
      .then(data => setData([...data]))
  }, [])

  function toggleCreateNewClass(e: MouseEvent<HTMLButtonElement>) {

  }

  return (
    <div>
      <div className="create-turma">
        <h1>Turmas</h1>
        <button className="button-create-turma" onClick={toggleCreateNewClass}>
          Cadastrar Turma
          <AiOutlinePlus fontSize={'1.25rem'} />
        </button>
{/* 
        {newClass ? '' : /** Componente para criação de nova turma */}
      </div>
      <div className="turmas-card">
        <div className="card-header">
          <p>Turma</p>
          <p>Nº Alunos</p>
        </div>

        {data.map(turma => {
          return (
            <TurmaCard key={turma.id} nome={turma.nome} Alunos={turma.Alunos?.length} />
          )
        })
        }
      </div>
    </div>
  )
}