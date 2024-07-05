import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get('tag')

  if (!tag) throw new Error('태그는 필수입니다.')

  revalidateTag(tag) //revalidateTag는 서버컴포넌트에서만 동작

  return NextResponse.json({ message: '재검증에 성공했습니다.', tag })
}