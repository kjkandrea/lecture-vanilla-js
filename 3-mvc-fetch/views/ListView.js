import View from './View.js'

const ListView = new View()

ListView.setup = function(el) {
  this.el = el
  this.bindEvents()
  return this
}

ListView.render = function(data) {
  ListView.el.innerHTML = ListView.generateHTML(data)
  return this
}

ListView.generateHTML = function(data) {
  let template = ''

  if (data.length === 0) return 'No Data'

  template += '<ul>'
  data.forEach(item => {
    template += `<li>${item.title}<button class="js-delete-btn" data-id="${item.id}">remove</button></li>`
  });
  template += '</ul>'

  return template
}

ListView.bindEvents = function() {
  this.el.addEventListener('click', (e) => {
    const button = e.target.className === 'js-delete-btn'
    if (!button) return
    const id = e.target.dataset.id
    this.emit('@delete', id)
  })

  return this
}

export default ListView