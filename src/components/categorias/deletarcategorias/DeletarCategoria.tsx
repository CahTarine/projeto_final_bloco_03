import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { deletar, listar } from "../../../services/Service"
import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('500')) {
                alert("Erro ao deletar Categoria.");
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
                alert('Categoria apagada com sucesso');
        } catch (error: any) {
                alert('Erro ao deletar Categoria.')
            }

        setIsLoading(false)
        retornar()
    }


    function retornar() {
        navigate("/categorias")
    }

    
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-400 ">
        <h1 className="text-4xl text-center my-8 font-bold">
                Deletar Categoria
            </h1>
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
            
        
            <p className="text-center text-gray-700 mb-8">
                Tem certeza que deseja deletar a categoria{' '}
                <span className="font-semibold text-blue-700">
                "{categoria?.descricao}"
                </span>
                ?
            </p>
        
            <div className="flex gap-4">
                <button
                onClick={retornar}
                className="w-full bg-indigo-400 hover:bg-blue-700 text-white py-2 border-4 rounded-3xl"
                >
                Cancelar
                </button>
        
                <button
                onClick={deletarCategoria}
                className="w-full bg-red-500 hover:bg-red-700 text-white py-2 border-4 rounded-3xl"
                >
                Confirmar
                </button>
            </div>
        </div>
  </div>
  
  )
}

export default DeletarCategoria