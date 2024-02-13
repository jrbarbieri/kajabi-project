import * as React from 'react'
import Card from './Card'

const ShowUser = ({ employee }) => {
  let parsedEmployee = JSON.parse(employee)
  return (
    <Card
      key={parsedEmployee.id}
      id={parsedEmployee.id}
      avatar={parsedEmployee.avatar}
      firstName={parsedEmployee.first_name}
      lastName={parsedEmployee.last_name}
      email={parsedEmployee.email}
      details={true}
    />
  )
}

export default ShowUser