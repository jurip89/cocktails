import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage =()=> {
    const error = useRouteError()
    console.error(error)
    return (
      <div>
          <h1>Oooops!</h1>
          <p>Something went worng, an error has occourred</p>
    </div>
  )
}

export default ErrorPage