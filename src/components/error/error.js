import React, { Fragment } from 'react'

const Error = ({mensaje}) => {
  return (
    <Fragment>
        <p className="danger error alert-danger">
            {mensaje}
        </p>
    </Fragment>
  )
}

export default Error;