import View from './View.js'

const ListView = new View()

ListView.setup = function(el) {
  this.el = el
  this.bindEvents()
  return this
}

ListView.render = function(data) {
  if(!data) { 
    alert('No Data')
    return
  }
  
  if (data.length === 0) {
    ListView.el.innerHTML = 'No Data'
    return
  }
  ListView.el.innerHTML = ListView.generateHTML(data)
}

ListView.generateHTML = function(data) {
  let template = ''

  template += '<ul>'
  data.forEach(item => {
    template += `<li>${item.article}<button class="js-remove-btn" data-id="${item.id}">remove</button></li>`
  });
  template += '</ul>'

  return template
}

ListView.bindEvents = function() {
  this.el.addEventListener('click', (e) => {
    if(!e.target.className === 'js-remove-btn') return
    const id = e.target.dataset.id
    this.emit('@delete', id)
  })
}

export default ListView