export default {
  data: [],
  get() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(data => {
        this.data = data
        return this.data
      })
  },
  // fake delete
  delete(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
  }
}