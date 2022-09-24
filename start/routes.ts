import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/messages', 'MessagesController').apiOnly()
}).prefix('/api')
