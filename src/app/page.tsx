import Link from 'next/link'
import style from './style.module.css'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY+'ddddd'
//이 서버컴포넌트 실행환경이 node이기에 process.env 사용가능

const getCurrentWeather = async () => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Seoul&aqi=no`
  )

  if (!res.ok) throw new Error('날씨 정보를 가져올 수 없습니다.')

  return res.json()
}

export default async function Home() {
  const res = await getCurrentWeather()
  console.log(res)

  return (
  <>
    <h1>날씨 앱</h1>
    <ul className={style.list}>
      <li><Link href='/seoul'>서울</Link></li>
      <li><Link href='/newyork'>뉴욕</Link></li>
      <li><Link href='/london'>런던</Link></li>
    </ul>
    <button>테스트</button>
  </>
  )
}
