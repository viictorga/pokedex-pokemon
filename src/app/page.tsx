"use client";
import { useRouter } from "next/navigation";
import "./globals.css";
import "./page.css";
import Link from "next/link";

const regiones = [
  { nombre: "Kanto", ruta: "Kanto", imagen: "/kanto.png" },
  { nombre: "Johto", ruta: "Johto", imagen: "/johto.png" },
  { nombre: "Hoenn", ruta: "Hoenn", imagen: "/hoenn.png" },
  { nombre: "Sinnoh", ruta: "Sinnoh", imagen: "/sinnoh.png" },
  { nombre: "Teselia", ruta: "Teselia", imagen: "/teselia.png" },
  { nombre: "Kalos", ruta: "Kalos", imagen: "/kalos.png" },
  { nombre: "Alola", ruta: "Alola", imagen: "/alola.png" },
  { nombre: "Galar", ruta: "Galar", imagen: "/galar.png" },
  { nombre: "Paldea", ruta: "Paldea", imagen: "/paldea.png" },
];




const App = () =>{
  const router = useRouter();
  return (
    <div className="contenedorPrincipal">
      <h1>Pokemon</h1>
      <div className="botonAngela">
        {/* jeje para la mejor del mundo :))) */}
        <button onClick={(()=>{
          router.push("/pokemon/psyduck")
        })}>El pokemon fav de angela :)</button>
      </div>
      <h2>Estas son las regiones que puedes seleccionar:</h2>

      <div className="contenedorLogosGeneraciones">
        {regiones.map((region) => (
          <div key={region.nombre} className="cardRegion">
            <Link href={`/region/${region.ruta}`}>
              <img
                className="imagenesGeneraciones"
                src={region.imagen}
                alt={region.nombre}
              />
            </Link>
            <p>{region.nombre}</p>
          </div>
        ))}
      </div>
      <div className="divisor">
        <label >-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</label>
      </div>
      <div >
        <h2>Este es la pokedex global: </h2>
        <Link className="lupa" href="/pokedex"> <img src="lupa.png"></img></Link>
      </div>
      <div className="divisor">
        <label >-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</label>
      </div>
      

    </div>
  );
}
export default App;