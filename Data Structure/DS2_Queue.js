// Queue Data Structure

class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }

}

const queue = new Queue();

console.log(queue.isEmpty())

queue.enqueue(23);
queue.enqueue(67);
queue.enqueue(17);
queue.enqueue(83);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek())

queue.print();