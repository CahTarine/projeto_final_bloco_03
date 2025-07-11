import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"


interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriasProps) {

  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md p-6 m-6 w-80 hover:shadow-xl transition">
        <h2 className="text-xl font-bold mb-2 text-blue-700">{categoria.nome}</h2>
        <p className="text-gray-600 mb-4">{categoria.descricao}</p>

        <div className="flex justify-center gap-20">
            <Link to={`/editarcategoria/${categoria.id}`}
            className="border-4 rounded-3xl bg-indigo-400 flex justify-center
                                   hover:bg-red-800 text-white w-1/2 py-2 cursor-pointer" >
                <button>Editar</button>
            </Link>
            <Link to={`/deletarcategoria/${categoria.id}`}
            className="border-4 rounded-3xl bg-indigo-400 flex justify-center
                                   hover:bg-red-800 text-white w-1/2 py-2 cursor-pointer" >
                <button>Deletar</button>
            </Link>
        </div>
  </div>
  
  )
}

export default CardCategorias
