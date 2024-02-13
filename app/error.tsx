'use client';
import React from 'react'

interface Props {
    error: Error;
}

const ErrorPage = ({error}: Props) => {
  return (
    <div>
      And unexpected error has occoured.
    </div>
  )
}

export default ErrorPage
