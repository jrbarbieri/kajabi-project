class HomeController < ApplicationController
  def index
    employee_data = EmployeesListService.call

    @employee_list = employee_data['employees'].to_json
  end

  def show
    employee_data = EmployeesListService.call(params[:id])

    @employee = employee_data['employees'].to_json
  end
end
