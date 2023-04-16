import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCockTails] = useState([])

  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const resp = await fetch(`${url}${searchTerm}`)
      const data = await resp.json()
      const { drinks } = data
      const newCocktails = drinks.map((item) => {
        const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
          item
        return {
          id: idDrink,
          name: strDrink,
          info: strAlcoholic,
          glass: strGlass,
          image: strDrinkThumb,
        }
      })
      setCockTails(newCocktails)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setCockTails([])
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])
  return (
    <AppContext.Provider
      value={{ loading, searchTerm, cocktails, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
