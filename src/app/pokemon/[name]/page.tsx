"use client"

import { useParams, useRouter } from "next/navigation"
import "./page.css"
import { useEffect, useState } from "react"
import { getPokemonByName } from "@/lib/api/getPokemonByName"
import { Pokemon } from "@/types"

const UnPokemon = () => {

    const { name } = useParams()
    const router = useRouter();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [miError, setError] = useState<string>("")

    useEffect(() => {

        getPokemonByName(String(name))
        .then((res) => {
            setPokemon(res.data)
            setError("")
        })
        .catch((e) => {
            setError(`Error cargando los datos: ${e.message ? e.message : e}`)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [name])

    return (
    <>
    {loading&& <h1>Cargando...</h1>}
    {miError && <h2>{miError}</h2>}
       {pokemon && <div className="contenedorPrincipall">

<h1 className="tituloPokemon">{pokemon.name}</h1>
<div className= "botoncin"> <button onClick={(()=>{
    router.back()
})}>Volver Atras</button></div>
<div className="sprites">

{pokemon.sprites.front_default && <img src={pokemon.sprites.front_default}/>}

{pokemon.sprites.front_shiny && <img src={pokemon.sprites.front_shiny}/>}

{pokemon.sprites.back_default && <img src={pokemon.sprites.back_default}/>}

{pokemon.sprites.back_shiny && <img src={pokemon.sprites.back_shiny}/>}

{pokemon.sprites.front_female && <img src={pokemon.sprites.front_female}/>}

{pokemon.sprites.back_female && <img src={pokemon.sprites.back_female}/>}

</div>


<div className="bloque">

<h2>Información básic</h2>
    {/* en este caso solo saldria si es el mejor pokemon del mundo jeje */}
    {pokemon.name=="piplup" && <p>Este es el pokemon fav de miriam ;)</p>} 
<p>ID: {pokemon.id}</p>
<p>Posicion en la pokedex: {pokemon.order}</p>
<p>Altura: {pokemon.height/10}m</p>
<p>Peso: {pokemon.weight/100}kg</p>
<p>Experiencia base: {pokemon.base_experience}</p>
<p>¿Es forma por defecto?: {String(pokemon.is_default)}</p>

</div>


<div className="bloque">

<h2>Especie</h2>

<p>Nombre especie: {pokemon.species.name}</p>
<p>URL especie: {pokemon.species.url}</p>

</div>


<div className="bloque">

<h2>Encuentros</h2>

<p>{pokemon.location_area_encounters}</p>

</div>


<div className="bloque">

<h2>Tipos</h2>

{pokemon.types.map((type,index)=>(
<p key={index}>
Slot {type.slot} : {type.type.name}
</p>
))}

</div>


<div className="bloque">

<h2>Estadísticas</h2>

{pokemon.stats.map((stat,index)=>(
<p key={index}>
{stat.stat.name} | Base: {stat.base_stat}
</p>
))}

</div>


<div className="bloque">

<h2>Habilidades</h2>

{pokemon.abilities.map((ability,index)=>(
<p key={index}>
Slot {ability.slot} : {ability.ability.name}
Oculta: {String(ability.is_hidden)}
</p>
))}

</div>


<div className="bloque">

<h2>Formas</h2>

{pokemon.forms.map((form,index)=>(
<p key={index}>
Nombre: {form.name} | URL: {form.url}
</p>
))}

</div>


<div className="bloque">

<h2>Game Index</h2>

{pokemon.game_indices.map((game,index)=>(
<p key={index}>
Juego: {game.version.name} | Índice: {game.game_index}
</p>
))}

</div>


<div className="bloque">

<h2>Objetos que puede llevar</h2>

{pokemon.held_items.map((item,index)=>(
<div key={index}>

<p>Objeto: {item.item.name}</p>

{item.version_details.map((detail,i)=>(
<p key={i}>
Versión: {detail.version.name} | Rareza: {detail.rarity}
</p>
))}

</div>
))}

</div>


<div className="bloque movimientos">

<h2>Movimientos</h2>

{pokemon.moves.map((move,index)=>(

<div key={index}>

<p>Movimiento: {move.move.name}</p>



</div>

))}

</div>

</div>}</>

    )
}

export default UnPokemon