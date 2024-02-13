import * as React from 'react'
import Card from './Card'

const Home = ({ employee_list }) => {
  return JSON.parse(employee_list).map(function (employee) {
    return (
      <Card
        key={employee.id}
        id={employee.id}
        avatar={employee.avatar}
        firstName={employee.first_name}
        lastName={employee.last_name}
        email={employee.email}
      />
    )
  })
}

export default Home