class EmployeesListService
  include HTTParty
  base_uri 'https://reqres.in/api'

  def self.call
    response = get('/users')
    response.parsed_response
  end
end