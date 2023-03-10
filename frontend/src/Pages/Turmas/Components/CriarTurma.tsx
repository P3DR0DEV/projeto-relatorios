import { IoIosCloseCircleOutline } from "react-icons/io";
import "./CriarTurma.css";
import { FormEvent, RefObject, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CriarTurma({ dialog }: { dialog: RefObject<HTMLDialogElement> }) {
  const [nomeTurma, setNomeTurma] = useState('')

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault()
    create(nomeTurma)
    dialog.current?.close();
  }

  function create(nome: string) {
    fetch('http://localhost:3000/turmas/create', {
      method: 'POST',
      body: JSON.stringify({
        nome
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTUwMzY3IiwiaWF0IjoxNjc4Mzc3MjUyLCJleHAiOjE2Nzg5ODIwNTJ9.LV2O-YDUN5UPB_YQktiESSAzYVUvG2ZMFgo5D_XsYsA'
      }
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
            <input type="text" className="input-dialog" placeholder="Nome da Turma" value={nomeTurma} onChange={(e) => setNomeTurma(e.target.value)} />
          </label>
          <button className="submit-newclass">Criar Turma</button>
        </form>
      </div>
    </dialog>
  );
}
