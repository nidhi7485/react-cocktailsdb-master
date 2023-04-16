import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchFrom from '../components/SearchForm'
export default function Home() {
  return (
    <main>
      <SearchFrom />
      <CocktailList />
    </main>
  )
}
