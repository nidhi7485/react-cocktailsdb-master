import React from 'react'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()

  const searchaValue = React.useRef('')
  useEffect(() => {
    searchaValue.current.focus()
  }, [])
  const searchCocktail = () => {
    setSearchTerm(searchaValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite coctail</label>
          <input
            type='text'
            id='name'
            ref={searchaValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
