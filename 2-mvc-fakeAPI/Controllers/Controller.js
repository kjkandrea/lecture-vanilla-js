import ListView from '../views/ListView.js'
import AddItemView from '../views/AddItemView.js'

import TodoModel from '../models/TodoModel.js'

const Controller = {}

Controller.init = function() {
  ListView.setup(this.seletors.list)
    .on('@delete', this.deleteItem)

  AddItemView.setup(this.seletors.addItem)
    .on('@add', this.addItem)

  this.renderData()
}

Controller.seletors = {
  list: document.getElementById('list'),
  addItem: document.getElementById('add-item')
}

Controller.renderData = function() {
  TodoModel.get()
    .then(ListView.render)
    .catch(console.error)
}

Controller.addItem = function() {
  TodoModel.add()
  Controller.renderData()
}

Controller.deleteItem = function(id) {
  TodoModel.delete(id)
  Controller.renderData()
}

export default Controller