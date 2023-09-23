import { useState, useEffect } from 'react'
import { Prop } from '../interfaces/autocomplete';
import { useSearch } from '../hooks/useSearch'

function AutoComplete({ delay }: Prop) {

  const [term, setTerm] = useState('')
  const [items, setItems] = useState<string[]>([])

  const searchItems = useSearch(delay, term)

  useEffect(() => {
    setItems(searchItems)
  }, [searchItems])

  return (
    <>
      <div>
        <input type="text" onChange={(e) => { setTerm(e.target.value)}} />
      </div>
      <div>
        <ul>
          {
            items.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    </>
  )

}

export default AutoComplete

