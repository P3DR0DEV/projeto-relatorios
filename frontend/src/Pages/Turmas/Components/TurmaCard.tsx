import { Link } from 'react-router-dom'
import './TurmaCard.css'
import { CardType } from '@/types'

export function TurmaCard({ nome, alunos }: CardType) {
  return (
    <div className="card-select-turma">
      <Link to={'/'}>{nome}</Link>
      <p>{alunos}</p>
    </div>
  )
}