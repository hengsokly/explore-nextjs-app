'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status, data: session} = useSession();

  return (
    <div className='flex bg-slate-200 p-5 space-x-5'>
      <Link href='/'>Next.js</Link>
      <Link href='/users'>Users</Link>
      { status === "authenticated" && 
        <div>
          {session.user!.name}
          <Link href={'/api/auth/signout'} className='ml-5'>Sign out</Link>
        </div> 
      }
      { status === "unauthenticated" && <Link href='/api/auth/signin'>Signin</Link> }
      { status === "unauthenticated" && <Link href='/registers/new'>Register</Link> }
    </div>
  )
}

export default NavBar
