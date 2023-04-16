import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  return <h1>searchform component</h1>
}
