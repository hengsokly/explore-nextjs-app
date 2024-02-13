'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const NewUser = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {router.push('/users')}}
        className='btn btn-primary'>
        Create user
      </button>
    </div>
  )
}

export default NewUser
