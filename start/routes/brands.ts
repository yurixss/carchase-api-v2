/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('index', 'BrandsController.index')
}).prefix('brands')
