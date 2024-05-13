import Link from 'next/link'

const Page = ({ params }: { params: { kind: string[] } }) => {
  console.log('home', { params })

  return (
    <div>
      <div>HomePage</div>

      <Link href={'/'}>Home</Link>
      <Link href={'/disclaimer'}>Disclaimer</Link>
      <Link href={'/tos'}>ToS</Link>
    </div>
  )
}

export default Page
