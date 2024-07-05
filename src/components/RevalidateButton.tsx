'use client'
//이벤트핸들러 사용하면 무조건 클라이언트컴포넌트 붙여줘야함

type Props = {
  tag: string
}

export default function RevalidateButton({ tag }: Props) {
  const deleteCache = async () => {
    const res = await fetch(`/api/revalidate?tag=${tag}`, {
      method: 'POST'
    })
    const result = await res.json()
    console.log(result)
  }

  return (
    <button onClick={deleteCache}>캐시 비우기</button>
  )
}