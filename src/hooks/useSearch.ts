import { useState, useEffect } from 'react'
import { fetchItems } from '../api/autocomplete'
import { debounce } from '../utils'

export function useSearch(delay: number, term: string): string[] {
  
  const [items, setItems] = useState<string[]>([])

  const searchHandler = debounce((term: string) => getItems(term), delay)

  async function getItems(term: string): Promise<void> {
    const result = await fetchItems(term)
    setItems(result)
  }

  useEffect(() => {
    if (!term.length) {
      return
    }

    searchHandler(term)
  
  }, [term])

  return items // this will be updated to on the callback when executing setItems
}