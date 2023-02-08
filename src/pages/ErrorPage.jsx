import React from 'react'
import { useRouteError } from 'react-router-dom';
import { NavBar } from '../components';
const ErrorPage =()=> {
    const error = useRouteError()
    console.error(error)
    return (
      <div>
        <NavBar/>
          <h1>Oooops!</h1>
          <p>Something went worng, an error has occourred</p>
    </div>
  )
}

export default ErrorPage