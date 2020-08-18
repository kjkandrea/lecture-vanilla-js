import DummyModel from '../models/DummyModel.js'

import ListView from '../views/ListView.js'

const Controller = {}

Controller.init = function() {
  ListView.setup(document.getElementById('app'))
    .on('@delete', Controller.onDelete)

  this.renderView()
}

Controller.renderView = function() {
  DummyModel.get()
    .then(ListView.render)
    .catch(console.error)
}

// fake delete
Controller.onDelete = function(id) {
  DummyModel.delete(id)
    .then(console.log)
    .then(res => Controller.renderView())
    .catch(console.error)
}

export default Controller