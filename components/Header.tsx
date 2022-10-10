import Image from 'next/image'
import Link from 'next/link'
import HeaderImage from '@styles/header.png'

export default function HeaderComponent() {
  return (
    <div className="text-center header">
      <Link href="/">
        <Image src={HeaderImage} className="rounded mx-auto d-block" alt="Popcorn time!" />
      </Link>
    </div>
  )
}
