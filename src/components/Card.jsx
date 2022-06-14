import React from 'react'

export const Card = ({ header, footer, children }) => {
  return (
    <div className='card'>
      {header && <div className='card-header'>{header}</div>}
      <div className='card-body'>{children}</div>
      {footer && <div className='card-footer'>{footer}</div>}
    </div>
  )
}
