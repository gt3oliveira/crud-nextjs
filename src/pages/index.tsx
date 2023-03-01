import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Gustavo', 32, '1'),
    new Cliente('Amanda', 27, '2'),
    new Cliente('Carlos', 50, '3'),
    new Cliente('Pedro', 26, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(`Editar... ${cliente.nome}`)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-t from-blue-500 to-purple-500
    `}>
      <Layout titulo="Cadastro Simples com Next.JS">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-3">Novo Cliente</Botao>

        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
        <Formulario cliente={clientes[0]}></Formulario>      
      </Layout>
    </div>
  )
}
