import { Turma } from "@/types";
import { useEffect, useState, MouseEvent, useRef } from "react";
import "./Turmas.css";
import { AiOutlinePlus } from "react-icons/ai";
import { CriarTurma } from "./components/CriarTurma";
import { TurmaCard } from "./components/TurmaCard";
import { useNavigate } from "react-router-dom";

export function Turmas() {
  const [data, setData] = useState<Turma[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token") || '""')

    if (token) {
      fetch("http://localhost:3000/turmas", {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          authorization:
            `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setData([...data]));
    } else {
      navigate('/')
    }
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
