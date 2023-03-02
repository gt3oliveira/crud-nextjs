import Cliente from "@/core/Cliente";
import { useState } from "react";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div className="bg-gray-200 p-4 rounded-lg">
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} />
            ) : false}
            <Entrada 
                texto="Nome" 
                valor={nome} 
                valorMudou={setNome}
                className="mb-5" 
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade} 
                valorMudou={setIdade}
                className="mb-5"             
            />
            <div className="flex justify-end">
                {/* <button className={`                    
                    text-white bg-green-400
                    px-4 py-2 rounded-md mr-2
                `}>
                    {id ? 'Salvar' : 'Alterar'}
                </button>

                <button className={`
                    bg-red-400 text-white
                    px-4 py-2 rounded-md mr-2
                `}>
                    Cancelar
                </button> */}
                <Botao className="mr-2" cor="green"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="red" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}