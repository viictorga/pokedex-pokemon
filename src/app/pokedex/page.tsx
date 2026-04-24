"use client"

import { Pokemon } from "@/types";
import { useEffect, useState } from "react";
import UnPokemon from "../components/pokemon/page";
import { getAllPokemons } from "@/lib/api/getAllPokemons";




const MiPokedex = () =>{

    const [search,setSearch] = useState<string>("");
    const [inputName,setInputName] = useState<string>("")
    const [inputType,setInputType] = useState<string>("")
    const [inputRegion,setInputRegion ] = useState<string>("")
    const [inputGenero,setInputGenero] = useState<string>("")
    const [pokemons,setPokemons] = useState<Pokemon[]>([]);
    const [pagina, setPagina] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [miError, setError] = useState<string>("");
    const [totalResultados, setTotalResultados] = useState<number>(0);
    const borrarFiltros = () => {
      setInputName("");
      setInputType("");
      setInputRegion("");
      setInputGenero("");

      setSearch("");
      setPagina(1);
      setPokemons([]);
    };
    useEffect(()=>{

        getAllPokemons().then((res)=>{
            setPokemons(res.data)
            setError("")
        }).catch((err)=>{
            setError(err.message)
        }).finally(()=>{
            setLoading(false);
        })


    }, [search, pagina])

    return (
    <div className='mainContainer'>
      <h1 className="tituloPrincipal">
        Pokedex
      </h1>
       {!miError && !loading && search&&<label className="resultadosPersonajes">{totalResultados} personajes encontrados por el multiverso</label>}
      <form className='buscador' onSubmit={(e) => {
            e.preventDefault();
            
            setSearch(inputName + inputType + inputRegion + inputGenero);
          }}>
            

        <label> Nombre: </label> <input type="text" value={inputName} onChange={(e) => {setInputName(e.target.value)} } onKeyDown={(e)=>{
          if(e.key == "Enter"){
            setSearch
          }
        }} />
      
        <label> Especie: </label> <input type="text" value={inputType} onChange={(e) => setInputType(e.target.value)}/>
      
        <label> Estado: </label> <input type="text" value={inputRegion} onChange={(e) => setInputRegion(e.target.value)}/>

        <label> Genero: </label> <input type="text" value={inputGenero} onChange={(e) => setInputGenero(e.target.value)}/>
       
        <button className="botoncito"></button>
        { search &&<button className="botonBorrarFiltros" onClick={borrarFiltros}>Borrar Filtros</button>
}
        
      </form>
      <div className="botones">
        
        <button className="paginaMenos"onClick={()=> setPagina(pagina-1)}> ← </button>
        <button  onClick={() => setSearch(inputName + inputType + inputRegion + inputGenero)}> Buscar </button>
        <button className="paginaMas" onClick={()=> setPagina(pagina+1)}> → </button>
      </div>
      
      <label className="paginas"> Pagina: {pagina}</label>
      {search && loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}
      <div className="characterContainer">
          {pokemons.filter((pokemon) => {

    const matchName = inputName
        ? pokemon.name.toLowerCase().includes(inputName.toLowerCase())
        : true

    const matchType = inputType
        ? pokemon.types.some(t => 
            t.type.name.toLowerCase() === inputType.toLowerCase()
        )
        : true

    const matchRegion = inputRegion
        ? pokemon.region?.toLowerCase() === inputRegion.toLowerCase()
        : true

    return matchName && matchType && matchRegion

}).map((pokemon) => (
    <UnPokemon key={pokemon.id} pokemonObj={pokemon} />
))}

      </div>


  </div>
  )
}
export default MiPokedex;