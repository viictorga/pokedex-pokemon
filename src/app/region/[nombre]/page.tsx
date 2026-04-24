"use client"
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Region } from "@/types";
import { getRegionByName } from "@/lib/api/getRegionByName";
import "./page.css"


const miRegion = () =>{

     const router = useRouter();
    const {nombre} = useParams()
    const nombre2 = String(nombre)
    const [character, setCharacter] = useState<Region | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [miError, setError] = useState<string>("");

        
          useEffect(() => {
            getRegionByName(nombre2).then((res)=>{
                setCharacter(res.data)
                setError("")
            }).catch((e)=>{
              setError(`Error cargando los datos: ${e.message ? e.message: e}`)

            }).finally(()=>{
              setLoading(false);
            })
          }, [nombre]);
          
    return (
  <>
    {loading && <p>Cargando región...</p>}
    {miError && <p>{miError}</p>}

    {character && (
      <div className="card">

        <h1>{character.name}</h1>

        <p>
          <label>ID:</label> {character.id}
        </p>

        <p>
          <label>Generación principal:</label>{" "}
          {character.main_generation.name}
        </p>

        <div>
          <h3>Pokedexes</h3>
          {character.pokedexes.map((pokedex) => (
            <p key={pokedex.name}>{pokedex.name}</p>
          ))}
        </div>

        <div>
          <h3>Version Groups</h3>
          {character.version_groups.map((version) => (
            <p key={version.name}>{version.name}</p>
          ))}
        </div>

        <div>
          <h3>Locations</h3>
          {character.locations.slice(0,5).map((location) => (
            <p key={location.name}>{location.name}</p>
          ))}
          <button onClick={()=>{router.back()}}> Volver atrás</button>
        </div>
          
      </div>
    )}
  </>
);
}
export default miRegion;