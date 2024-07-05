
type Props = {
  params: {
    location: string
  }
}
export default function Detail({ params }: Props) {
  return (
  <>
    <h1>{params.location}의 3일 예보</h1>
  </>
  )
}
