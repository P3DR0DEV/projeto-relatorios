import { Link } from 'react-router-dom'
import './TurmaCard.css'
import { CardType } from '@/types'

export function TurmaCard({ nome, Alunos }: CardType) {
  return (
    <div className="card-select-turma">
      <Link to={'/'} className='nome-turma'>{nome}</Link>
      <p>{Alunos}</p>
    </div>
  )
}