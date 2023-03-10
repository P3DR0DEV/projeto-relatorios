import { ChangeEvent, FormEvent, RefObject, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import './CriaAluno.css'
import { NewAluno } from '@/types';

export function CriaAluno({ dialog, turmaId }: { dialog: RefObject<HTMLDialogElement>, turmaId: number }) {
  const [formData, setFormData] = useState<NewAluno>({
    matricula: '',
    nome: ''
  })


  function handleSubmitForm(e: FormEvent) {
    console.log(formData)
    e.preventDefault()
    if (formData) {
      criarAluno(turmaId, formData)
      dialog.current?.close()
    }
  }

  function criarAluno(turmaId: number, { matricula, nome }: NewAluno) {
    fetch('http://localhost:3000/alunos', {
      method: 'POST',
      body: JSON.stringify({
        turma_id: turmaId,
        matricula: Number(matricula),
        nome
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTUwMzY3IiwiaWF0IjoxNjc4Mzc3MjUyLCJleHAiOjE2Nzg5ODIwNTJ9.LV2O-YDUN5UPB_YQktiESSAzYVUvG2ZMFgo5D_XsYsA'
      }
    })
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget

    setFormData(prevFormData => {
      if (prevFormData) {
        return {
          ...prevFormData,
          [name]: value
        }
      }
      return prevFormData
    })

  }


  return (
    <dialog ref={dialog}>
      <div className="dialog">
        <form onSubmit={handleSubmitForm}>
          <button
            onClick={(e) => {
              e.preventDefault();
              dialog.current?.close();
            }}
            className="close-dialog"
          >
            <IoIosCloseCircleOutline />
          </button>
          <label>
            <input type="text" name='nome' className="input-dialog" placeholder="Nome do Aluno" value={formData?.nome} onChange={handleInputChange} />
          </label>

          <label>
            <input type="number" name='matricula' className="input-dialog" placeholder="Matricula" value={formData?.matricula} onChange={handleInputChange} />
          </label>
          <button className="submit-newclass" type='submit'>Criar Aluno</button>
        </form>
      </div>
    </dialog>
  )
}