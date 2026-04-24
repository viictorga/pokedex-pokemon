import { Pokemon } from "@/types"
import { api } from "./api"




export const getAllPokemons = async() =>{
    const respuesta = await api.get<Pokemon[]>(`/pokemon`);
    return respuesta;
}