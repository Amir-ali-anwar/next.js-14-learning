import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div>Home page</div>
    <Link href="/about">About page</Link>
    </>
  )
}

export default page