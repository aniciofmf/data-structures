/* Link based impl */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.length > 0 ? this.top.value : null;
	}

	push(value) {
		var node = new Node(value);

		if (this.length == 1) {
			this.bottom = this.top;
		}

		node.next = this.top;
		this.top = node;

		this.length++;
	}

	pop() {
		var value = null;

		if (this.length == 0) {
			return null;
		} else if (this.length == 1) {
			value = this.top.value;
			this.top = null;
			this.bottom = null;
		} else {
			value = this.top.value;
			this.top = this.top.next;
		}

		this.length--;

		return value;
	}

	isEmpty() {
		return this.length == 0 ? true : false;
	}
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

var value = myStack.pop();
console.log(value);
