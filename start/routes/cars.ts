/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('index', 'CarsController.index')
  Route.post('store', 'CarsController.store')
  Route.put('update/:id', 'CarsController.update')
  Route.get('show/:id', 'CarsController.show')
  Route.delete('delete/:id', 'CarsController.delete')
}).prefix('cars')
