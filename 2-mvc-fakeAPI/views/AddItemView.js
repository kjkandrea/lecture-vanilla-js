import View from './View.js'

const AddItemView = new View()

AddItemView.setup = function(el) {
  this.el = el
  this.bindEvents()
  return this
}

AddItemView.bindEvents = function() {
  this.el.addEventListener('click', (e) => {
    this.emit('@add')
  })
}

export default AddItemView