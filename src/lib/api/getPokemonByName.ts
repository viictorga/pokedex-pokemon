import { Pokemon } from "@/types"
import { api } from "./api"




export const getPokemonByName = async(name: string) =>{
    const respuesta = await api.get<Pokemon>(`/pokemon/${name}`);
    return respuesta;
}