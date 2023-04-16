import React from 'react'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)
  React.useEffect(() => {
    async function fetchCocktail() {
      setLoading(true)
      try {
        const resp = await fetch(`${url}${id}`)
        const data = await resp.json()
        const { drinks } = data
        if (drinks) {
          const {
            idDrink: id,
            strDrink: name,
            strGlass: glass,
            strAlcoholic: info,
            strCategory: category,
            strDrinkThumb: image,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            glass,
            info,
            instruction,
            category,
            image,
            ingredients,
          }
          setCocktail(newCocktail)
          setLoading(false)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchCocktail()
  }, [id])
  if (loading) {
    return <div>loading</div>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  const { name, image, glass, info, instruction, category, ingredients } =
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
            <span className='drink-data'>instruction:</span>
            {instruction}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
