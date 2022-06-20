/* Link based impl */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// front peek
	peek() {
		return this.length > 0 ? this.head.value : null;
	}

	enqueue(value) {
		var node = new Node(value);

		if (this.length == 0) {
			node.next = this.head;
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;
	}

	dequeue() {
		var value = null;

		if (this.length == 0) {
			return null;
		} else if (this.length == 1) {
			value = this.head.value;
			this.head = null;
			this.tail = null;
		} else {
			value = this.head.value;
			this.head = this.head.next;
		}

		this.length--;

		return value;
	}

	isEmpty() {
		return this.length == 0 ? true : false;
	}
}

const myQueue = new Queue();

myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");

console.log(myQueue);
