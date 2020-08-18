import View from './View.js'

const PartOneView = new View()

PartOneView.setup = function(el) {
  this.el = el
  this.formEl = this.el.getElementsByTagName('form')[0]
  this.bindEvents()

  return this
}

PartOneView.bindEvents = function() {
  this.formEl.addEventListener('submit', this.submitForm)
}

PartOneView.submitForm = function(e) {
  e.preventDefault()
  const formValues = [
    e.target.justInput.value
  ]

  const validate = formValues.some(v => {
    const val = v.trim()
    if(!val) {
      alert('값을 입력해주세요')
      return true
    }
  })

  if (!validate) PartOneView.emit('@onSubmit', formValues)
}

export default PartOneView