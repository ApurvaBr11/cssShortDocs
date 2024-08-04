import React from 'react'
import data from '../Data'

const Docspage = () => {
  return (
    <div className='card'>
        <div>
      {data.map((item, index) => (
        <div key={index} className='mb-5 border-b border-white'>
          <h2 className='my-4 underline text-xl font-semibold'>{item.ClassName}</h2>
          {item.attributes.map((attribute, attrIndex) => (
            <p key={attrIndex}>
              {Object.entries(attribute).map(([key, value]) => (
                <span key={key}>{key}: {value}; </span>
              ))}
            </p>
          ))}
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default Docspage