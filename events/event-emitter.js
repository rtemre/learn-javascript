class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Register an event listener
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // Emit an event
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }

  // Remove an event listener
  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }
}

// Usage
const myEmitter = new EventEmitter();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

myEmitter.on("greet", greet);
myEmitter.emit("greet", "Bob"); // Output: Hello, Bob!

// Remove the event listener
myEmitter.off("greet", greet);
myEmitter.emit("greet", "Alice"); // No output, since the listener was removed
