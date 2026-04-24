import { Pokemon, Region } from "@/types"
import { api } from "./api"




export const getRegionByName = async(id: string) =>{
    const respuesta = await api.get<Region>(`/region/${id}`);
    console.log(respuesta)
    return respuesta;
}