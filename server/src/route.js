const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const BikeController = require('./controllers/BikeController')

module.exports = (app) => {
     
     app.get('/users', UserController.index,UserController.index)
     app.get('/bikes', BikeController.index)
     
     app.post('/user', UserController.create)
     app.post('/bike', BikeController.create)
     
     app.put('/user/:userId', UserController.put)
     app.put('/bike/:bikeId', BikeController.put)
     
     app.delete('/user/:userId', UserController.delete)
     app.delete('/bike/:bikeId', BikeController.delete)
     
     app.get('/user/:userId', UserController.show)
     app.get('/bike/:bikeId', BikeController.show)
     
     app.post('/login', UserAuthenController.login)


}   