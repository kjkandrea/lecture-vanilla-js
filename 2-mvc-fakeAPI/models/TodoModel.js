export default {
  data: [
    { id: 1, article: 'hello. im item 1'},
    { id: 2, article: 'hello. im item 2'},
    { id: 3, article: 'hello. im item 3'}
  ],

  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 200)
    })
  },
  add() {
    const currentId = (this.data[this.data.length - 1].id) + 1
    this.data.push({
      id: currentId,
      article: `hello. im item ${currentId}`
    })
  },
  delete(id) {
    this.data = this.data.filter((item, idx) => {
      return item.id * 1 !== id * 1
    })
  }
}