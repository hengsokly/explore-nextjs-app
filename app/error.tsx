'use client';
import React, { useEffect } from 'react'
import * as Sentry from "@sentry/nextjs";

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({error, reset}: Props) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);
  
  return (
    <div>
      <button className='btn' onClick={reset}>Retry</button>
      And unexpected error has occoured.
    </div>
  )
}

export default ErrorPage
