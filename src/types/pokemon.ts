// Recurso genérico reutilizable
export type NamedAPIResource = {
  name: string
  url: string
}

// ---------------------------------------------

export type Ability = {
  ability: NamedAPIResource
  is_hidden: boolean
  slot: number
}

export type GameIndex = {
  game_index: number
  version: NamedAPIResource
}

export type VersionDetail = {
  rarity: number
  version: NamedAPIResource
}

export type HeldItem = {
  item: NamedAPIResource
  version_details: VersionDetail[]
}

export type MoveVersionGroupDetail = {
  level_learned_at: number
  move_learn_method: NamedAPIResource
  version_group: NamedAPIResource
}

export type Move = {
  move: NamedAPIResource
  version_group_details: MoveVersionGroupDetail[]
}

export type Stat = {
  base_stat: number
  effort: number
  stat: NamedAPIResource
}

export type PokemonType = {
  slot: number
  type: NamedAPIResource
}

export type Sprites = {
  front_default: string | null
  front_shiny: string | null
  back_default: string | null
  back_shiny: string | null
  front_female: string | null
  front_shiny_female: string | null
  back_female: string | null
  back_shiny_female: string | null
  other?: {
    dream_world?: {
      front_default: string | null
      front_female: string | null
    }
    home?: {
      front_default: string | null
      front_female: string | null
      front_shiny: string | null
      front_shiny_female: string | null
    }
    "official-artwork"?: {
      front_default: string | null
      front_shiny: string | null
    }
  }
}

// ---------------------------------------------

export type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  weight: number
  is_default: boolean
  order: number

  abilities: Ability[]
  forms: NamedAPIResource[]
  game_indices: GameIndex[]
  held_items: HeldItem[]
  location_area_encounters: string

  moves: Move[]
  species: NamedAPIResource
  sprites: Sprites
  stats: Stat[]
  types: PokemonType[]
}