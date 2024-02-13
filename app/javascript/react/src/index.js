import { define } from 'remount'      
import Home from "./components/Home"
                                      
define(
  { 
    'home-component': {
      component: Home,
      attributes: ['employee_list', 'pagination']
    }
  }
)