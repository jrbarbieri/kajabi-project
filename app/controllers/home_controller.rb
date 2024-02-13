class HomeController < ApplicationController
  def index
    employee_data = EmployeesListService.call

    @employee_list = employee_data['employee_list'].to_json
    @pagination = employee_data['pagination'].to_json
  end
end
