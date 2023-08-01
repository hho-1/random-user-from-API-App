import React from 'react'

const Main = ({person}) => {
  return (
    <tr className='body-tr'>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.phone}</td>
        <td>{person.age}</td>
    </tr>
  )
}

export default Main