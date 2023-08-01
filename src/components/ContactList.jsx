import React from 'react'
import Main from './Main'

const ContactList = ({people}) => {
  return (
    <>
        
        {people.map((person) => {
            return (
                <Main key={person.id} person={person}/>
            )
        })}
        
        
    </>
  )
}

export default ContactList