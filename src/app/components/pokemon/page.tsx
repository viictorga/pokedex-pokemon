"use client"

import { getPokemonByName } from "@/lib/api/getPokemonByName";
import { Pokemon } from "@/types";
import { useEffect, useState } from "react";

type Props = {
    name?:string;
    pokemonObj?: Pokemon
}


const UnPokemon = ({name, pokemonObj}:Props) =>{
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [miError, setError] = useState<string>("");
    
    useEffect(()=>{
        if(pokemonObj){
            setPokemon(pokemonObj)
        }
        else if(name){
            getPokemonByName(name).then((res)=>{
                setPokemon(res.data)
            }).catch((err)=>{
                setError(err.message)
            }).finally(()=>{
                setLoading(false)
            })
        }
        
    }, [name, pokemonObj])
    return(
        <div className="pokemonCard">
            {loading && <p>Cargando...</p>}
            {miError && <p>{miError}</p>}
            {pokemon ? <>
                <div>

                
                <img 
                    src={pokemon.sprites.other?.["official-artwork"]?.front_default || ""}
                    alt={pokemon.name}
                    width={150}
                />

                
                <h2>{pokemon.name}</h2>

                
                <p>
                    {pokemon.types.map(t => t.type.name).join(" / ")}
                </p>

            </div>
            
            
            </>: <p>No hay pokemmon</p>}
        </div>
    )
}
export default UnPokemon;