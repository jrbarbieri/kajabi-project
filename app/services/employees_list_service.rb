class EmployeesListService
  include HTTParty
  base_uri 'https://reqres.in/api'

  def self.call
    response = get('/users')
    build_response(response.parsed_response)
  end

  private

  def self.build_response(response)
    {
      employee_list: response['data'],
      pagination: {
        page: response['page'],
        per_page: response['per_page'],
        total: response['total'],
        total_pages: response['total_pages']
      }
    }.as_json
  end
end
