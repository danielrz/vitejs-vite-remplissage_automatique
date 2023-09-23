
import { useRef } from 'react'

export function wait(pause: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, pause)
  })
}

export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  let timer = useRef<number | null>(null)

  return function (...args: Parameters<T>) {
    clearTimeout(timer.current)
    timer.current = setTimeout(async () => {
      console.log('debounce::args', args)
      await fn(args)
    }, delay)
  }
}