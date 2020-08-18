import View from './View.js'

const PartTwoView = new View()

PartTwoView.setup = function(el) {
  this.el = el
  return this
}

PartTwoView.addItem = function(data) {
  this.items = this.items || []
  this.items = this.items.concat(data)
  this.render()
}

PartTwoView.render = function() {
  let template = ''

  template += '<ul>'
  this.items.forEach(item => {
    template += `<li>${item}</li>`
  });
  template += '</ul>'

  this.el.innerHTML = template
}

export default PartTwoView