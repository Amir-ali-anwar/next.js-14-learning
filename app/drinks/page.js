import React from 'react'
import DrinksList from '@/components/DrinksList'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
const fetchDrinks = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Failed to fetch Drinks")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await fetchDrinks()
  return (
    <div>
      <DrinksList drinks={data?.drinks} />
    </div>
  )
}

export default page