class EmployeesListService
  include HTTParty
  base_uri 'https://reqres.in/api'

  def self.call(id = nil)
    new(id).call
  end

  def initialize(id = nil)
    @id = id
  end

  def call
    response = @id ? self.class.get("/users/#{@id}") : self.class.get('/users')
    build_response(response.parsed_response)
  end

  private

  def build_response(response)
    { employees: response['data'] }.as_json
  end
end
