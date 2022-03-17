import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState({})

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url} ${id}`)
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredients1,
            strIngredients2,
            strIngredients3,
            strIngredients4,
            strIngredients5,
          } = data.drinks[0]
          const ingredients = [
            strIngredients1,
            strIngredients2,
            strIngredients3,
            strIngredients4,
            strIngredients5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>No cocktail found</h2>
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
