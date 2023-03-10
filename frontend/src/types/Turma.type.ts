import { AlunoType } from "./Aluno.Type"

export interface Turma {
  id: number
  nome: string
  Alunos?: Array<AlunoType>
}

export interface CardType {
  id: number
  nome: string
  Alunos?: number
}
