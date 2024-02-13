import { define } from 'remount'
import Home from './components/Home'
import ShowUser from './components/ShowUser'

define({
  'home-component': {
    component: Home,
    attributes: ['employee_list']
  },
  'show-user-component': {
    component: ShowUser,
    attributes: ['employee']
  }
})
