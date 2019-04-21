import React from 'react'

const Products = ({ sku, name, quantity, unitPrice, image }) => {
  return (
    <tr>
      <td>
        <img src={image} alt={name} />
        {name}
        SKU# {sku}
      </td>
      <td>{quantity}</td>
      <td>{ unitPrice.toLocaleString('en-IN', {style: 'currency', currency: 'USD'}).replace('US', '') }</td>
    </tr>
  )
}

export default Products