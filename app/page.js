import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div>Home page</div>
    <Link href="/about" style={{display:'block'}}>About page</Link>
    <Link href="/about/info" style={{display:'block'}}>Info page</Link>
    <Link href="/about/info" style={{display:'block'}}>Info page</Link>
    <Link href="/query" style={{display:'block'}}>query page</Link>
    <Link href="/task" style={{display:'block'}}>task page</Link>
    <Link href="/prisma-example" style={{display:'block'}}>prisma-example</Link>
    <Link href="/drinks" style={{display:'block'}}>drinks</Link>
    </>
  )
}

export default page