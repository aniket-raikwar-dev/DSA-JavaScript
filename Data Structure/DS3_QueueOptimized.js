// Optimized Queue using Object


class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // enqueue
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // dequeue
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  // isEmpty
  isEmpty() {
    return this.rear - this.front === 0;
  }

  // peek
  peek() {
    return this.items[this.front];
  }

  // size
  size() {
    return this.rear - this.front;
  }

  // print
  print() {
    console.log(this.items)
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());