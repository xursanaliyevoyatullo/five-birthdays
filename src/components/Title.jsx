import React from 'react'

function Title({birthdaysCount}) {
  return (
    <div className='menu-cards'>
        <p>{birthdaysCount} Birthdays Today</p>
    </div>
  )
}

export default Title