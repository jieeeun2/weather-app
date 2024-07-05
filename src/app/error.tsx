'use client'
//에러컴포넌트는 반드시 클라이언트컴포넌트여야함

import { useEffect } from 'react'

type Props = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {

  useEffect(() => {
    console.log('---', error.message)
  }, [error])

  return (
  <>
    <h1>에러페이지</h1>
    <button onClick={() => reset()}></button>
  </>
  )
}