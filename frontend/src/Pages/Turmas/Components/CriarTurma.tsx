import { IoIosCloseCircleOutline } from "react-icons/io";
import "./CriarTurma.css";
import { FormEvent, RefObject } from "react";

export function CriarTurma({ dialog }: { dialog: RefObject<HTMLDialogElement> }) {

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <dialog ref={dialog}>
      <div className="dialog">
        <form>
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
            <input type="text" className="input-dialog" placeholder="Nome da Turma" />
          </label>
          <button onClick={handleSubmitForm} className="submit-newclass">Criar Turma</button>
        </form>
      </div>
    </dialog>
  );
}
