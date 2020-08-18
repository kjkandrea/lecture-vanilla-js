export default class View {
  constructor() {
    this.events = {}
  }

  // Subscribe
  on(eventName, func) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(func)
  }

  // Publish
  emit(eventName, data) {
    if (this.events[eventName]) this.events[eventName].forEach(func => {
      func(data)
    });
  }
}