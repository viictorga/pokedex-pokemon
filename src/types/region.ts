
import { NamedAPIResource } from "./pokemon"
export type Region = {
  id: number
  name: string

  locations: NamedAPIResource[]
  main_generation: NamedAPIResource
  pokedexes: NamedAPIResource[]
  version_groups: NamedAPIResource[]
}