import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
 query getItems($offset: Int,$limit: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
     id
     name
     height
    }
}
`