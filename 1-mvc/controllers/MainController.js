import PartOneView from '../views/PartOneView.js'
import PartTwoView from '../views/PartTwoView.js'

const Controller = {}

Controller.init = function() {
  PartOneView.setup(this.selectors.PartOneContainer)
    .on('@onSubmit', this.onSubmitPartOne)

  PartTwoView.setup(this.selectors.PartTwoContainer)
}

Controller.selectors = {
  PartOneContainer: document.querySelector('#part-1'),
  PartTwoContainer: document.querySelector('#part-2')
}

Controller.onSubmitPartOne = function (data) {
  PartTwoView.addItem(data)
}

export default Controller