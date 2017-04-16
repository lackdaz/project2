var mongoose = require('mongoose')

var MenuItemSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.ObjectId,
    ref: 'Business'
  },
  name: {
    type: String,
    required: true
  },
  subname: String,
  description: {
    type: String
  },
  price: {
    type: Number
  },
  tag: [{
    type: String
  }],
  course: [{
    type: String
  }],
  ingredients: [{
    type: String
  }],
  recipe: [{
    type: String
  }],
  active: {
    type: Boolean
  },
  special: {
    type: Boolean
  },
  image: {
    type: String
  },
  index: {
    type: Number
  }
})

module.exports = mongoose.model('MenuItem', MenuItemSchema)
