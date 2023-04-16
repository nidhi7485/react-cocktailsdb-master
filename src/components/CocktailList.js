import React from 'react'
import { useGlobalContext } from '../context'
import Cocktail from '../components/Cocktail'

export default function CocktailList() {
  const { loading, cocktails } = useGlobalContext()

  console.log(cocktails)
  if (loading) {
    return <h2>loading</h2>
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktail matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
