import React from 'react'

const Products = ({ sku, name, quantity, unitPrice, image }) => {
  return (
    <tr className="line-item">
      <td className="d-flex align-items-center">
        <div className="thumb rounded-circle">
          <img src={image} alt={name} />
        </div>
        <div className="meta ml-4">
          <p className="mb-0">{name}</p>
          <small className="text-muted initialism">SKU# {sku}</small>
        </div>
      </td>
      <td>{quantity}</td>
      <td>{ unitPrice.toLocaleString('en-IN', {style: 'currency', currency: 'USD'}).replace('US', '') }</td>
    </tr>
  )
}

export default Products