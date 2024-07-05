'use client'
//이벤트가 있는건 서버컴포넌트에서는 용납안되는거기때문에 클라이언트컴포넌트가 되어야함

import { useRouter } from 'next/navigation'

export default function HomeButton() {
  const router = useRouter()
  const goToHome = () => { 
    router.push('/')
  }

  return (
    <button onClick={goToHome}>홈으로</button>
  )
}