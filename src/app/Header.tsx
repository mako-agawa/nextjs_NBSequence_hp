import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-5 px-10 bg-gray-800  border-b flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-extrabold'>
          <Link href="/">not Bad Sequence</Link>
        </h1>
      </div>
      <div>
        <nav className='text-md font-medium'>
          <Link href="/articles/new" className='bg-orange-300 text-gra px-3 py-3 rounded-md'>記事を書く</Link>
        </nav>
      </div>
      
      </header>
  )
}

export default Header