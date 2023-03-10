import { Link } from "react-router-dom";
import './AlunoList.css'
import { AlunoType } from "@/types";

export function AlunoList({ aluno }: { aluno: AlunoType }) {
  const { matricula, nome } = aluno
  return (
    <div className="alunos-list">
      <div className="aluno-list-nome">
        <Link to={`/turmas/`} className='nome-aluno'>{nome}</Link>
        <p>{matricula}</p>
      </div>
      <Link to={'/'}>Gerar Relatório</Link>
    </div>
  )
}