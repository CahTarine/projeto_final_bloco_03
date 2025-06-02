import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { BeatLoader } from "react-spinners";

function FormCategorias() {

  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {id} = useParams<{id: string}>();

  async function buscarPorId(id: string) {
    try{
      await listar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      if (error.toString().includes('500')){
        alert("Erro ao buscar Categoria");
      }
    }
  }

  useEffect(() => {
    console.log("ID recebido:", id);
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
    })
}

function retornar() {
  navigate("/categorias")
}

async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  setIsLoading(true)

  if (id !== undefined) {
      try {
          await atualizar(`/categorias/${id}`, categoria, setCategoria)
          alert('A Categoria foi atualizada com sucesso!')
      } catch (error: any) {
              alert('Erro ao atualizar a Categoria.')
          }
      } else {
      try {
          await cadastrar(`/categorias`, categoria, setCategoria)
          alert('A Categoria foi cadastrada com sucesso!')
      } catch (error: any) {
              alert('Erro ao cadastrar o tema.')

      }
  }

  setIsLoading(false)
  retornar()
}

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-400">
      <h1 className="text-4xl text-center my-8 font-bold" >
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

        <form className="bg-white p-6 rounded-lg w-full max-w-sm" onSubmit={gerarNovaCategoria}>
            <h2 className="text-xl font-bold text-center mb-4 text-blue-600">
            Categoria
            </h2>

            <div className="mb-3">
            <label className="block mb-1 text-sm">Nome</label>
            <input
                type="text"
                placeholder="Digite o nome"
                name='nome'
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                value={categoria.nome ?? ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            <label className="block mb-1 text-sm">Descrição</label>
            <input
                type="text"
                placeholder="Digite a descrição"
                name='descricao'
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                value={categoria.descricao ?? ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            </div>

            <button
            type="submit"
            className="w-full bg-indigo-400 text-white py-2 border-4 rounded-3xl hover:bg-red-800"
            >
              {isLoading ?
                        <BeatLoader 
                        color='black'
                        size={60} 
                        loading={true}
                        
                    /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
              }
            </button>
        </form>
    </div>

  )
}

export default FormCategorias