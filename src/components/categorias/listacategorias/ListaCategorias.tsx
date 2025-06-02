
import CardCategorias from "../cardcategorias/CardCategorias";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { listar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro ao buscar categorias');
            }
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>

        {categorias.length === 0 && (
            <div className="flex justify-center items-center bg-blue-400">
                <BeatLoader 
            color='black'
            size={60} 
            loading={true}
            
        /></div>
            
        )}
        
            <div className="flex justify-center w-full bg-blue-400 min-h-screen">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                                {categorias.map((categoria) => (
                                     <CardCategorias key={categoria.id} categoria={categoria}/>
                                ))}
                           
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias;