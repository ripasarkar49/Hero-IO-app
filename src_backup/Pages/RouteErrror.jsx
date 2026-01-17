import React from 'react'
import { useRouteError } from 'react-router'

const RouteErrror = () => {
    const error = useRouteError();
  return <div>{error.message}</div>;
}

export default RouteErrror
