const { where } = require('sequelize')
const{Bike} = require('../models')
module.exports = {
  
  async index (req, res) {
    try {
      const bikes = await Bike.findAll()
      res.send(bikes)
    } catch (error) {
      res.status(500).send({
         error: 'The information was incorrect'
        })
    }
   
  },

  
  async create(req, res) {
    try {
      const bike = await Bike.create(req.body)
      res.send(bike.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'The create information was incorrect'
        })
    }
  },

  
  async put(req, res) {
    try {
      await Bike.update(req.body,{
      where: {
        id: req.params.bikeId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update information was incorrect'
        })
    }
  },

  
  async delete(req, res) {
    try {
      const bike = await Bike.findOne({
        where: {
          id: req.params.bikeId
        }
      })
      if (!bike) {
        return res.status(403).send({
          error: 'The id is not found'
        })
      }
      await bike.destroy()
      res.send(bike)
    } catch (error) {
      res.status(500).send({
        error: 'Delete information was incorrect'
       })
    }
  },

  
  async show (req, res) {
    try {
      const bike = await Bike.findOne({
        where: {
          id: req.params.bikeId
        }
      })
      if (!bike) {
        return res.status(403).send({
          error: 'The id is not found'
        })
      }

      res.send(bike)
    } catch (error) {
      res.status(500).send({
        error: 'information was incorrect'
       })
    }
  }
}