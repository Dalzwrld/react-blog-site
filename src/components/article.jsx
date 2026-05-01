import React from 'react'

function Article({title, date, preview}) {
  return (
    <article>
        <h3 className='title'>{title}</h3>
        <small className='date'>{date}</small>
        <p className='preview'>{preview}</p>
    </article>
  )
}

export default Article