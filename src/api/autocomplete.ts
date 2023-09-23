import { wait } from '../utils'

export async function fetchItems(term: string): Promise<string[]> {
  await wait(300)
  return new Promise((resolve) => resolve([...Array(10).keys()].map((i) => `${term}-${i}`)))
}