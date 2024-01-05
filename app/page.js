import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div>Home page</div>
    <Link href="/about" style={{display:'block'}}>About page</Link>
    <Link href="/about/info">Info page</Link>
    </>
  )
}

export default page