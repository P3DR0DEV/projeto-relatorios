import { Turma } from "@/types";
import { useEffect, useState, MouseEvent, useRef } from "react";
import "./Turmas.css";
import { AiOutlinePlus } from "react-icons/ai";
import { CriarTurma } from "./components/CriarTurma";
import { TurmaCard } from "./components/TurmaCard";

export function Turmas() {
  const [data, setData] = useState<Turma[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    fetch("http://localhost:3000/turmas", {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTUwMzY3IiwiaWF0IjoxNjc4Mzc3MjUyLCJleHAiOjE2Nzg5ODIwNTJ9.LV2O-YDUN5UPB_YQktiESSAzYVUvG2ZMFgo5D_XsYsA",
      },
    })
      .then((response) => response.json())
      .then((data) => setData([...data]));
  }, []);

  function toggleCreateNewClass(e: MouseEvent<HTMLButtonElement>) {
    dialog.current?.showModal();
  }

  return (
    <div>
      <div className="create-turma">
        <h1>Turmas</h1>
        <button className="button-create-turma" onClick={toggleCreateNewClass}>
          Cadastrar Turma
          <AiOutlinePlus fontSize={"1.25rem"} />
        </button>

        <CriarTurma dialog={dialog} />


      </div>
      <div className="turmas-card">
        <div className="card-header">
          <p>Turma</p>
          <p>Nº Alunos</p>
        </div>

        {data.map((turma) => {
          return (
            <TurmaCard
              key={turma.id}
              id={turma.id}
              nome={turma.nome}
              Alunos={turma.Alunos?.length}
            />
          );
        })}
      </div>
    </div>
  );
}
