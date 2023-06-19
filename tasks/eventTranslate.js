class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    const event = this.events[eventName];
    if (event) event.push(callback);
    else this.events[eventName] = [callback];
  }

  off(eventName, callback) {
    const event = this.events[eventName];
    if (!event) {
      return;
    }
    const i = event.indexOf(callback);
    if (i !== -1) {
      event.splice(i, 1);
    }
  }

  once(eventName, callback) {
    const wrap = () => {
      this.off(eventName, wrap);
      callback();
    };
    this.on(eventName, wrap);
  }

  emit(eventName, ...args) {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn) => fn(...args));
    }
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, ...args) {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn) => fn(...args));
    }
  }
}

const emitter = new EventEmitter();
const log = console.log;
const greet = (eventName) => {
  console.log(`Hello ${eventName}`);
};
