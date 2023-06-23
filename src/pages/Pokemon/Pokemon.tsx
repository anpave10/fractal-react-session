import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../../graphql/queries'
import CircularProgress from '@mui/material/CircularProgress'
import { Box, CardActionArea, CardContent, Grid, Typography, Card, CardMedia, Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { PokemonInterface } from '../../models/pokemon'

const Pokemon = () => {
  const itemsPerPage = 12
  const totalPokemons = 1279

  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [offset, setOffset] = useState(0)

  const { loading, error, data } = useQuery(GET_POKEMONS, { variables: { limit: itemsPerPage, offset  } })

  useEffect(() => {
    if(data){
      setPokemons(data.pokemon_v2_pokemon)
    }
  },[data])

  const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    const newOffset = (value - 1) * itemsPerPage
    setOffset(newOffset)
  }

  return(
    <Box  display='flex' justifyContent='center' alignItems='center'>
      {
        loading ? <CircularProgress/>:
          <Grid container spacing={2}>
            {
              pokemons.map((pokemon: PokemonInterface) => {
                return <Grid item xs={4} key={pokemon.id}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+ pokemon.id +'.svg'}
                        alt="green iguana"
                        sx={{ objectFit:'contain' }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {pokemon.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
            Description
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              })
            }
            <Grid container direction='row' justifyContent='center' my={2}>
              <Pagination defaultPage={currentPage} count={Math.trunc(totalPokemons/itemsPerPage)} onChange={handlePagination} showFirstButton showLastButton/>
            </Grid>
          </Grid>
      }
    </Box>
  )
}

export default Pokemon