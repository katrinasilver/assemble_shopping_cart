import React from 'react'

const ReviewCart = ({ sku, unitPrice, name, quantity }) => {
  return (
    <p>{ sku } { unitPrice }, { name }, { quantity }</p>
  )
}

export default ReviewCart